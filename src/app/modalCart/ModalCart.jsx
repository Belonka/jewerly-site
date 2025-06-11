'use client';
import {useCart} from '@/context/CartContext'
import Link from "next/link";
import CartContent from '@/components/cartContent/CartContent';
import SendOrderButton from '@/components/sendOrder/SendOrder';


export default function ModalCart() {
    
    const { isCartOpen, closeCart} = useCart()
    if(!isCartOpen) return null

  return (
    <div className='modal-shoppingCart'>
        <div className='modal'>
            <div className='cart-header'>
            <h3>Ваш кошик</h3>
            <button onClick={closeCart} className='btn-closeCart'>x</button>
            </div>
            
            <CartContent  className='modal-Cart'/>
            
            
            

              {/* <ul className='list-modalCart'>
                {cartItems.map((item, index) =>
            <li key={index}>
                {item.name}-{item.price} грн
                <button onClick={() => deleteItem(item)} className='btn-deleteItem-modal'>Видалити</button>
            </li>)} 
             
            </ul> */}
            <div className='btn-orders'>
            <Link className='modal-cart btn' href='/shopping-cart'>Перейти до корзини</Link>
            <SendOrderButton className='modal-cart btn-1'/>
            </div>
            
        </div>
      
    </div>
  )
}
