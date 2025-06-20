// 'use client';
// import { useEffect, useRef } from 'react';
// import {useCart} from '@/context/CartContext'
// import Link from "next/link";
// import CartContent from '@/components/cartContent/CartContent';
// import SendOrderButton from '@/components/sendOrder/SendOrder';



export default function ModalCart() {
    
    // const { isCartOpen, closeCart} = useCart()
    // const modalRef = useRef(null);
    

    // useEffect(() =>{
    //     const handleClickOutside = (event) => {
    //         if (modalRef.current && !modalRef.current.contains(event.target)) {
    //             closeCart();
    //         }
    //     };

    //     if (isCartOpen) {
    //       document.addEventListener('mousedown', handleClickOutside);
    //     }
    
    //     return () => {
    //       document.removeEventListener('mousedown', handleClickOutside);
    //     };
    //   }, [isCartOpen, closeCart]);
    

    // if(!isCartOpen) return null;

  return (
    <>
    //  <div className='modal-shoppingCart'>
    //      <div className='modal'ref={modalRef}>
    //         <div className='cart-header'>
    //         <h3>Ваш кошик</h3>
    //         <button onClick={closeCart} className='btn-closeCart'>x</button>
    //         </div>
            
    //         <CartContent  className='modal-Cart'/>
            
    //         <div className='btn-orders'>
    //         <Link className='modal-cart btn' href='/shopping-cart'>Перейти до корзини</Link>
    //         <SendOrderButton className='modal-cart btn-1'/>
    //         </div>
            
    //     </div> 
      
    //  </div>
    </>
  )
}
