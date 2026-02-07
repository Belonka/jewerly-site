import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import Link from "next/link";
import { resolveImage } from "@/lib/resolveImage";



export default function CartItem({item}) {
    const {addToCart, removeFromCart, deleteItem} = useCart();
    const src = resolveImage(item.image || item.images?.[0]);
    const total = Number(item.price) * item.quantity;
    const totalAmount = total.toFixed(2);
    const quantityControls = (
      <div className='quantity-controls'>
                <div className='quantity-change'>
                <button onClick={() => removeFromCart(item)} className='btn-plus-min'>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)} className='btn-plus-min'>+</button>
                </div>
                <button onClick={() => deleteItem(item)} className='btn-deleteCart'>Видалити</button>
                </div>
                
    )
    const quantityControlsMobile = (
      <div className='quantity-controls-mobile'>
                <div className='quantity-change-mobile'>
                <button onClick={() => removeFromCart(item)} className='btn-plus-min-mobile'>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)} className='btn-plus-min-mobile'>+</button>
                </div>
                <button onClick={() => deleteItem(item)} className='btn-deleteCart-mobile'>Видалити</button>
                </div>
                
    )
  return (
     <>
    <div className='cart-item'>
    <Link href={`/katalog/${item.category}/${item.slug}`}>
        <div className='cart-name-image'>
          <div className="cart-thumb">
        <Image 
        src={src} 
        alt={item.name || "Product image"}
        fill 
        sizes="80px"
        // width={80} 
        // height={80} 
        className="cart-image"
        />
        </div>
        <h3>{item.name}</h3>
        
        </div>
        </Link>
        <div className='cart-item-quantity-mobile'>
        {quantityControlsMobile}
        </div>
        <div className='cart-item-info'>
            {quantityControls}
  
        
        
        <div className='cart-item-price'>
        <strong><p className='p-bold'>{totalAmount}</p></strong> <p>грн</p>
        </div>
        
        </div>
        
    </div>
    
    </>
  )
}
