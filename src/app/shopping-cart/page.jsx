'use client'
import {useCart} from '@/context/CartContext';
import CartItem from '@/components/cartItem/CartItem';

export default function ShoppingCartPage(){
    const {cartItems} = useCart()

    return(
        <section className='section-2 container'>
        <h2>Корзина</h2>
         {cartItems.length ===0 ? (
            <p> Ваша корзина порожня  </p>
         ) : (
            cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
                    
                
            ))
         )}
        </section>
    )
}