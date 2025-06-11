import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import Link from "next/link";



export default function CartItem({item}) {
    const {addToCart, removeFromCart, deleteItem} = useCart();

    const total = Number(item.price) * item.quantity;
    const totalAmount = total.toFixed(2);
  return (
     <>
    <div className='cart-item'>
    <Link href={`/katalog/${item.category}/${item.slug}`}>
        <div className='cart-name-image'>
        <Image src={item.images[0]} alt={item.name} width={80} height={80} />
        <h3>{item.name}</h3>
        
        </div>
        </Link>
        <div className='cart-item-info'>
            
            <div className='quantity-controls'>
                <div className='quantity-change'>
                <button onClick={() => removeFromCart(item)} className='btn-plus-min'>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)} className='btn-plus-min'>+</button>
                </div>
                <button onClick={() => deleteItem(item)} className='btn-deleteCart'>Видалити</button>
                </div>
        
        
        <div className='cart-item-price'>
        <strong><p className='p-bold'>{totalAmount}</p></strong> <p>грн</p>
        </div>
        </div>
        
    </div>
    
    </>
  )
}
