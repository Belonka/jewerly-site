'use client'
import {useCart} from '@/context/CartContext';
import { useState} from 'react';
import SendOrderButton from '@/components/sendOrder/SendOrder';

import CartContent from '@/components/cartContent/CartContent';

export default function ShoppingCartPage(){
   const [deliveryMethod, setDeliveryMethod] = useState('')
    const { clearCart } = useCart();

    const handleChange =(e) => {
        setDeliveryMethod(e.target.value)
    }
    return(
        <section className='shopping-cart-cont container'>
            <div className='shopping-cart-main'>
                <div className='items-cart'>
            <h2>Корзина</h2>
            
                <div className='cart-items-border'>
            <CartContent className='shopping-Cart'/>        
            <div className='btn-sum'>
                <button onClick={clearCart} className='btn-3 btn-clean'>Очистити корзину</button>
                <SendOrderButton className='btn-2'/>         
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
                    <input type="text" placeholder="Область" name="province" required/>
                    <input type="text" placeholder="Місто" name="city" required/>
                    <input type="text" placeholder="Вулиця" name="city" required/>
                    <input type="text" placeholder="Будинок" name="city" required/>
                    <input type="text" placeholder="Поштовий індекс" name="city" required/>
                </form>
                </div>
                </div>
                <div className='delivery-method'>
                    <h4>Спосіб доставки</h4>
                    <div className='delivery-method-form'>
                    <form action="">
                        <label htmlFor="town-for delivery" className="form-label">Оберіть місто</label>
                        <select name="" id="town-for delivery"></select>
                    </form>
                    </div>
                    <form action="">
                    <label htmlFor="delivery" className="form-label">Оберіть спосіб доставки:</label>
                        <select
                            id="delivery"
                            value={deliveryMethod}
                            onChange={handleChange}
                            className="select-delivery"
                        >
                            <option value=""> Оберіть службу </option>
                            <option value="nova_poshta">Нова Пошта</option>
                            <option value="ukrposhta">Укрпошта</option>
                            <option value="self_pickup">Самовивіз</option>
                        </select>

                        {deliveryMethod && (
                            <p className="selected-method">
                            Ви обрали: {deliveryMethod === 'self_pickup' ? 'Самовивіз' : deliveryMethod.replace('_', ' ')}
                            </p>
                        )}
                    </form>

                </div>
                <div className='delivery-method'>
                    <h4>Спосіб оплати</h4>
                    <form action="">
                        <label htmlFor="payment" className="form-label">Оберіть спосіб оплати:</label>
                        <select id="payment" className="select-payment">
                            <option value="">Оберіть спосіб оплати</option>
                            <option value="cash_on_delivery">Оплата при отриманні</option>
                            <option value="bank_transfer">Банківський переказ</option>
                            <option value= "online_payment">Переказ на картку</option>
                </select>
                </form>
                </div>
                <div className='comment-order'>
                <textarea  placeholder=" Коментар" name="name " className="comment-input"/>
                </div>
             </div>
             </div>
            </div>
        </section>
    )
}