import Image from 'next/image';
import { useCart } from '@/context/CartContext';


export default function CartItem({item}) {
    const {addToCart, removeFromCart, deleteCart} = useCart;

    const total = Number(item.price) * item.quantity;
  return (
    <div className='cart-item'>
        <div className='cart-name-image'>
        <Image src={item.images[0]} alt={item.name} width={80} height={80} />
        <h3>{item.name}</h3>
        </div>
        <div className='cart-item-info'>
            
            <div className='quantity-controls'>
                <div>
                <button onClick={() => removeFromCart(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
                </div>
                <button onClick={() => deleteCart} className='btn-deleteCart btn-3'>Видалити</button>
                </div>
        </div>
        
        <div className='cart-item-price'>
        <strong><p className='p-bold'>{total.toFixed(2)}</p></strong> <p>грн</p>
        </div>
    </div>
  )
}
