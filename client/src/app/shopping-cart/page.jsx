'use client'
import {useCart} from '@/context/CartContext';
import { useState, useEffect} from 'react';
import SendOrderButton from '@/components/sendOrder/SendOrder';
import {getRegions, getCities, getDepartments} from '@/lib/addressAPI'
import CartContent from '@/components/cartContent/CartContent';

const initialForm = {
        deliveryMethod: "",
        contactMethod: "",
        paymentMethod: '',

        //Нова пошта
        
        selectedRegionRef: "",     
        selectedCityRef: "",       
        selectedCityName: "",      
        selectedDepartmentRef: "", 
        selectedDepartmentName: "",

        // Укрпошта:          
        ukrposhtaAddress: "",                  
        street: '',
        house: '',
        postalCode: '',
       
        // контактные данные
        firstName: "",
        lastName: "",
        phone: "",
        comment: "",

}
export default function ShoppingCartPage(){
    const { clearCart } = useCart();
    const [regions, setRegions] = useState([]);
    const [cities, setCities] = useState([]);
    const [departments, setDepartments] = useState([]);

    const [form, setForm] = useState(initialForm);

    const resetForm = () => {
        setForm(initialForm)
        setCities([])
        setDepartments([])
        // setRegions([]) 
        }


    const handleFormChange =(e) => {
        const {name, value} = e.target
        setForm((prev) => ({...prev, [name]:value}))
    }

    useEffect(() => {
        getRegions().then((data) => setRegions(data))
    }, []
    )

    const handleDeliveryMethodChange = (e) => {
        const method = e.target.value;

        setForm((prev) => ({
            ...prev,
            deliveryMethod: method,

            // reset Nova Poshta fields
            selectedRegionRef: "",
            selectedCityRef: "",
            selectedCityName: "",
            selectedDepartmentRef: "",
            selectedDepartmentName: "",

            // reset Ukrposhta fields
            ukrpostDeliveryType: "",
            ukrpostBranch: "",
        }));

        setCities([]);
        setDepartments([]);
        };

    const handleNPRegionChange = async (e) => {
        const regionRef = e.target.value; 

        setForm((prev) => ({ 
            ...prev,
            selectedRegionRef: regionRef,
            selectedCityRef: "",
            selectedCityName: "",
            selectedDepartmentRef: "",
            selectedDepartmentName: "",
        }));
        setDepartments([]);
        setCities([]);
        if (!regionRef) return;

        const data = await getCities(regionRef);
        setCities(data);

    }

    const handleNPCityChange = async(e) => {
        const cityRef = e.target.value;

        const city = cities.find((c) => c.Ref === cityRef);
        if (!cityRef) return;

        setForm((prev) => ({
            ...prev,
            selectedCityRef: cityRef,
            selectedCityName: city?.Description ?? "",
            selectedDepartmentRef: "",
            selectedDepartmentName: "",
        }))
        setDepartments([]);

        

        const deps = await getDepartments(cityRef);
        setDepartments(deps)
    }
    
    
    const handleNPDepartmentChange = (e) => {
        const depRef = e.target.value;
        const depObj = departments.find((d) => d.Ref === depRef);
        setForm((prev) => ({ 
            ...prev, 
            selectedDepartmentRef: depRef,
            selectedDepartmentName: depObj?.Description ?? "",
        }));
        };

        const handleUkrposhtaAddressChange = (e) => {
            setForm((prev) => ({ ...prev, ukrposhtaAddress: e.target.value }));
            };

    return(
        <section className='shopping-cart-cont container'>
            <div className='shopping-cart-main'>
                <div className='items-cart'>
            <h2>Корзина</h2>
            
                <div className='cart-items-border'>
            <CartContent className='shopping-Cart'/>        
            <div className='btn-sum'>
                <button onClick={clearCart} className='btn-3 btn-clean'>Очистити корзину</button>
                        
             </div>
             </div>
             <div className='text-attention-cart'>
                <p>Увага! Після оформлення замовлення та вибору оплати банківською карткою інформація для здійснення платежу буде надіслана вам у SMS-повідомленні або в Telegram.</p>
             </div>
             </div>

    <div className='cart-client-form'>             
             <div>
                <h3>Дані для відправки</h3>
                <div className='customer-data'>
                    <h4>Контактні дані</h4>
                <div className='customer-data-inputs'>
                <form action="">
                    <input
                    type="text"
                    placeholder="Ваше ім'я"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleFormChange}
                    required
                    />


                    <input
                    type="text"
                    placeholder="Ваше прізвище"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleFormChange}
                    required
                    />


                    <input
                    type="tel"
                    placeholder="+380"
                    name="phone"
                    value={form.phone}
                    onChange={handleFormChange}
                    required
                    />
                
                </form>
                </div>
                </div>
                
                <div className='delivery-method'>
                    <h4>Спосіб доставки</h4>
                    <div className=' delivery-method-form'>
                    
                    
                        <select
                            id="delivery"
                            value={form.deliveryMethod}
                            name="deliveryMethod"
                            onChange={handleDeliveryMethodChange}
                            className="select-delivery"
                            required
                        >
                            <option value=""> Оберіть службу </option>
                            <option value="nova_poshta">Нова Пошта</option>
                            <option value="ukrposhta">Укрпошта</option>
                            <option value="self_pickup">Самовивіз</option>
                        </select>

                   
                    </div>

                    {form.deliveryMethod === "nova_poshta" && (
                        <>
                        {/* Область */}
                        <div className="delivery-method-form">
                            <select
                            name="selectedRegionRef"
                            value={form.selectedRegionRef}
                            onChange={handleNPRegionChange}
                            required
                            >
                            <option value="">Оберіть область</option>
                            {regions.map((r) => (
                                <option key={r.Ref} value={r.Ref}>
                                {r.Description}
                                </option>
                            ))}
                            </select>
                        </div>                        

                        {/* Город */}
                        <div className="delivery-method-form">
                            <select
                            name="selectedCityRef"
                            value={form.selectedCityRef}
                            onChange={handleNPCityChange}
                            required
                            disabled={!cities.length}
                            >
                            <option value="">Оберіть місто</option>
                            {cities.map((c) => (
                                <option key={c.Ref} value={c.Ref}>
                                {c.Description}
                                </option>
                            ))}
                            </select>
                        </div>

                        {/* Отделение */}
                        <div className="delivery-method-form">
                            <select
                            name="selectedDepartmentRef"
                            value={form.selectedDepartmentRef}
                            onChange={handleNPDepartmentChange}
                            required
                            disabled={!departments.length}
                            >
                            <option value="">Оберіть відділення</option>
                            {departments.map((d) => (
                                <option key={d.Ref} value={d.Ref}>
                                {d.Description}
                                </option>
                            ))}
                            </select>
                        </div>
                        </>
                    )}
                    {form.deliveryMethod === "ukrposhta" && (
                            <div className="delivery-method-form">
                                <label className="delivery-label">Введіть повну поштову адресу</label>
                                <div className='comment-order'>
                                <textarea
                                name="ukrposhtaAddress"
                                value={form.ukrposhtaAddress}
                                onChange={handleUkrposhtaAddressChange}
                                placeholder="Область, місто/село, вулиця, будинок, квартира, індекс"
                                required
                                className="comment-input" // или отдельный класс, как тебе удобнее
                                rows={4}
                                />
                               </div> 
                            </div>
                            )}
                    </div>
                    <div className='customer-data'>
                    
                    <h4>Спосіб зв'язку</h4>
                    <div className='delivery-method-form'>
                    {/* <form action=""> */}
                       
                        <select id="contact" 
                        className="select-payment"
                        name="contactMethod"
                        value={form.contactMethod}
                        onChange={handleFormChange}>
                            <option value=""> Як з вами зв'язатись?</option>
                            <option value="sms">SMS повідомлення</option>
                            <option value="telegram">Повідомлення в Телеграм</option>
                            <option value= "viber">Повідомлення в Вайбер </option>
                </select>
                {/* </form> */}
                </div>
                </div>
                  
                <div className='customer-data'>
                    
                    <h4>Спосіб оплати</h4>
                    <div className='delivery-method-form'>
                    {/* <form action=""> */}
                       
                        <select id="payment" 
                        className="select-payment"
                        name="paymentMethod"
                        value={form.paymentMethod}
                        onChange={handleFormChange}
                        >
                            <option value="">Оберіть спосіб оплати</option>
                            <option value="cash_after_delivery">Оплата при отриманні</option>
                            <option value="bank_transfer">Банківський переказ</option>
                            <option value= "online_payment">Переказ на картку</option>
                </select>
                {/* </form> */}
                </div>
                </div>
                <div className='comment-order'>
                <textarea  placeholder=" Коментар" 
                name="comment" 
                className="comment-input"
                value={form.comment}
                onChange={handleFormChange}
                />
                </div>
                <SendOrderButton
                    className="btn-2 btn-send-order"
                    form={form}
                    resetForm={resetForm}
                    />
                
             </div>
             </div>
            </div>
        </section>
    )
}