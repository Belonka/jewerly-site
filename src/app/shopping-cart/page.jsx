'use client'
import {useCart} from '@/context/CartContext';
// import CartItem from '@/components/cartItem/CartItem';
import SendOrderButton from '@/components/sendOrder/SendOrder';

import CartContent from '@/components/cartContent/CartContent';

export default function ShoppingCartPage(){
    // const {cartItems} = useCart()

    // const totalAmount = cartItems.reduce(
    //     (acc, item) => acc + item.price * item.quantity,
    //     0
    //   );

    return(
        <section className='section-2 container'>
        <h2>Корзина</h2>
        <CartContent
        className='shopping-Cart'
        />        
         <div className='btn-sum'>
         <button className='btn-3 btn-clean'>Очистити корзину</button>
          <SendOrderButton className='btn-2'/>         
          </div>
        </section>
    )
}