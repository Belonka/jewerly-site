'use client'
import { useCart } from "@/context/CartContext";
import {useState} from 'react'
import ModalCart from "../../app/modalCart/ModalCart";

export default function Button({item}) {
  const { addToCart} = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    console.log('Add to cart:', item)
    addToCart(item);
    setIsModalOpen(true)
  }
  return (
    <div>
      <button onClick={handleClick} className="btn btn-buy">Купити</button>

      {isModalOpen && (
        <ModalCart onClose={() => setIsModalOpen(false) } />
      )}
    </div>
  )
}
