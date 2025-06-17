'use client'
import {useCart} from '@/context/CartContext';
import SendOrderButton from '@/components/sendOrder/SendOrder';

import CartContent from '@/components/cartContent/CartContent';

export default function ShoppingCartPage(){
   

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