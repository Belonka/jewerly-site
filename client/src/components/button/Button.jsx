'use client'
import { useCart } from "@/context/CartContext";
import {useState} from 'react'
// import ModalCart from "../../app/modalCart/ModalCart";

export default function Button({item}) {
  const { addToCart} = useCart();
  const [showMessage, setShowMessage] = useState(false);

  // const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    addToCart(item); 
    setShowMessage(true);
    // setIsModalOpen(true)
  }

  setTimeout(() => {
    setShowMessage(false);
  }, 2000);

  return (
    <div className="relative">
      <button onClick={handleClick} className="btn-2 btn-buy">Купити</button>
      {showMessage && (
        <div className="added-message">
          Товар додано до кошика
          </div>
      // {isModalOpen && (
      //   <ModalCart onClose={() => setIsModalOpen(false) } />
      )} 
    </div>
  )
}
