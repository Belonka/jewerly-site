'use client'
import {useCart} from '@/context/CartContext';
import CartItem from '@/components/cartItem/CartItem';
import Link from "next/link";

export default function ShoppingCartPage(){
    const {cartItems} = useCart()

    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

    return(
        <section className='section-2 container'>
        <h2>Корзина</h2>
         {cartItems.length ===0 ? (
            <p> Ваша корзина порожня  </p>
         ) : (
            cartItems.map((item) => (
                
                <CartItem key={item.id} 
                item={item} 
                />              
            ))
         )}
         <div className='summary-cart'>
            <div className='sum-amount'>
         <p className='p-bold'>Всього: </p><p><strong>{totalAmount.toFixed(2)} грн</strong></p>
         </div>
         <div className='btn-sum'>
          <button className='btn-2'>Оформити замовлення</button>
          <button className='btn-3 btn-clean'>Очистити корзину</button>
          </div>
        </div>
        </section>
    )
}