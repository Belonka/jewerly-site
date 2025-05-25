'use client'
import { useCart } from "@/context/CartContext";

export default function Button({item}) {
  const { addToCart} = useCart();

  const handleClick = () => {
    console.log('Add to cart:', item)
    addToCart(item);
  }
  return (
    <div>
      <button onClick={handleClick} className="btn btn-buy">Купити</button>
    </div>
  )
}
