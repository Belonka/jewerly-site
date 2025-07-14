'use client'
import {useCart} from '@/context/CartContext';
import { useState, useEffect} from 'react';
import SendOrderButton from '@/components/sendOrder/SendOrder';
import {getRegions, getCities, getDepartments} from '@/lib/addressAPI'
import CartContent from '@/components/cartContent/CartContent';

export default function ShoppingCartPage(){
    const { clearCart } = useCart();
    const [regions, setRegions] = useState([]);
    const [cities, setCities] = useState([]);
    const [departments, setDepartments] = useState([]);

    const [form, setForm] = useState({
        deliveryMethod: '',
        selectedRegion: '',
        selectedCity: '',
        regionRef: '',
        selectedDepartments: '',
        paymentMethod: '',
        street: '',
        house: '',
        postalCode: '',
        comment: '',
      });



    const handleFormChange =(e) => {
        const {name, value} = e.target
        setForm((prev) => ({...prev, [name]:value}))
    }

    useEffect(() => {
        getRegions().then((data) => setRegions(data))
    }, [])


    const handleRegionChange = ((e) => {
        const ref = e.target.value; 
        setForm(ref); 
        const region = regions.find((region) => region.Ref === ref);
        setForm(ref); 

        if(ref) {
            getCities(ref).then((data) => {
                
                setCities(data)
            })
        }else{
            setCities([]) 
        }
        setForm('')
    })

    const handleDepartmentChange = ((e) => {
        const refDep = e.target.value;
        setForm(refDep)
        const city = cities.find((c) => c.Description === selectedCity)
        if(city?.Ref) {
            getDepartments(city.Ref).then((data) => {
                setDepartments(data)
            })
        }else{
            setDepartments([])
        }
        setForm('')
    })


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
             </div>
             <div className='cart-client-form'>
             
             <div>
                <h3>Дані для відправки</h3>
                <div className='customer-data'>
                    <h4>Контактні дані</h4>
                <div className='customer-data-inputs'>
                <form action="">
                <input type="text" placeholder="Ваше ім'я" name="first-name" required/>
                <input type="text" placeholder="Ваше прізвище" name="last-name" required/>
                <input type="tel" placeholder="+380" name="phone " required/>
                
                </form>
                </div>
                </div>
                <div className='customer-data'>
                <h4>Адреса</h4>
                <div className='customer-data-inputs'>
                    
                <form action="">
                <div className='select-city-reg'>
                    <select required onChange={(e) => {
                        handleFormChange(e);
                        handleRegionChange(e)
                    }} 
                    value={form.selectedRegion}>
                    <option value="" >Оберіть область</option>
                     {regions.map((region) =>(
                        <option key = {region.Ref} value={region.Ref}>
                            {region.Description}
                        </option>
                        
                     ))}
                     </select>
                     <select required onChange={(e) => setForm(e.target.value)} disabled={!cities.length} >

                     <option value="" >Оберіть Місто</option>
                     {cities.map((city) => (
                        <option key={city.Ref} value={city.Description}>{city.Description}</option>
                     ))}
                     </select>
                     </div>
                    <input type="text" placeholder="Вулиця" name="city" required/>
                    <input type="text" placeholder="Будинок" name="city" required/>
                    <input type="text" placeholder="Поштовий індекс" name="city" required/>
                </form>
                </div>
                </div>
                <div className='delivery-method'>
                    <h4>Спосіб доставки</h4>
                    <div className=' delivery-method-form'>
                    <form action="">
                    
                        <select
                            id="delivery"
                            value={form.deliveryMethod}
                            onChange={handleFormChange}
                            className="select-delivery"
                        >
                            <option value=""> Оберіть службу </option>
                            <option value="nova_poshta">Нова Пошта</option>
                            <option value="ukrposhta">Укрпошта</option>
                            <option value="self_pickup">Самовивіз</option>
                        </select>

                    </form>
                    </div>
                    <div className='delivery-method-form'>
                    <form action="">
                       
                        
                        <select name="" id="town-for delivery" required onChange={(e) => {
                        handleFormChange(e);
                        handleRegionChange(e)
                    }}  value={form.selectedDepartments}>
                        <option value=""> Оберіть місто </option>
                        {cities.map((city) => (
                        <option key={city.Ref} value={city.Description}>{city.Description}</option>
                     ))}
                        </select>
                    </form>
                    </div>

                    <div className='delivery-method-form'>
                    <form action="">
                        
                        
                        <select name="" id="" required onChange={(e) => handleDepartmentChange(e.target.value)}>
                        <option value=""> Оберіть відділення </option>
                        {departments.map((dep) => (
                            <option key={dep.Ref} value={dep.Description}>{dep.Description}</option>
                        ))}
                        </select>
                    </form>
                        </div>

                    
                    {/* <div className='delivery-method-form'>
                    <form action="">
                        
                        
                        <select name="" id="" required onChange={(e) => setSelectedCity(e.target.value)}>
                        <option value=""> Оберіть відділення </option>
                        {departments.map((dep) => (
                            <option key={dep.Ref} value={dep.Description}>{dep.Description}</option>
                        ))}
                        </select>
                    </form>
                        </div> */}
                </div>
                <div className='customer-data'>
                    
                    <h4>Спосіб оплати</h4>
                    <div className='delivery-method-form'>
                    <form action="">
                       
                        <select id="payment" className="select-payment">
                            <option value="">Оберіть спосіб оплати</option>
                            <option value="cash_on_delivery">Оплата при отриманні</option>
                            <option value="bank_transfer">Банківський переказ</option>
                            <option value= "online_payment">Переказ на картку</option>
                </select>
                </form>
                </div>
                </div>
                <div className='comment-order'>
                <textarea  placeholder=" Коментар" name="name " className="comment-input"/>
                </div>
                <SendOrderButton className='btn-2 btn-send-order'/> 
             </div>
             </div>
            </div>
        </section>
    )
}