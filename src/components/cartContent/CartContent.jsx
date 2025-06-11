
import CartItem from '@/components/cartItem/CartItem';
import {useCart} from '@/context/CartContext';




export default function CartContent({ className }) {
    const {cartItems} = useCart();
    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ).toFixed(2);

   const isCartEmpty = cartItems.length === 0;
      
  return (
    <>
   <div className={`cart-content ${className || ''}`}>
      {isCartEmpty ? (
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
               <p className='p-bold'>Всього: </p><p><strong>{totalAmount} грн</strong></p>
               </div>
               </div>
    </div>
    </>
  )
}
