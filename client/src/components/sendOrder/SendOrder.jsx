'use client'
import { useState } from 'react'
import {useCart} from '@/context/CartContext'



export default function SendOrder({ className = '', form, resetForm }) {
const { cartItems, clearCart } = useCart()
const [isOpen, setIsOpen] = useState(false)
const [orderId, setOrderId] = useState('')
const [isSubmitting, setIsSubmitting] = useState(false)

const totalAmount = cartItems.reduce(
    (acc,item) => acc + item.price * item.quantity, 0
);

    const validateForm = () => {
        if (!form.firstName.trim()) {
        alert("Будь ласка, введіть імʼя")
        return false
        }
        if (!form.lastName.trim()) {
        alert("Будь ласка, введіть прізвище")
        return false
        }
        if (!form.phone.trim()) {
        alert("Будь ласка, введіть номер телефону")
        return false
        }
        if (!form.deliveryMethod) {
        alert("Оберіть спосіб доставки")
        return false
        }
        if (!form.paymentMethod) {
        alert("Оберіть спосіб оплати")
        return false
        }
        return true
    }


const handleSendOrder = async() => {
  if (!validateForm()) return
  if (isSubmitting) return
  setIsSubmitting(true)
    const orderData = {
        name: `${form.firstName} ${form.lastName}`,
        phone: form.phone,
        comment: form.comment,

        deliveryMethod: form.deliveryMethod,
        npDepartmentName: form.selectedDepartmentName,
        ukrposhtaAddress: form.ukrposhtaAddress,
        paymentMethod: form.paymentMethod,
        contactMethod: form.contactMethod,

        items: cartItems,
        total: totalAmount
    }
    
    try{
        const response = await fetch('/api/send-order', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });

        const data = await response.json().catch(() => null)

        if(!response.ok) {
           alert('Помилка при відправці замовлення.');
           return
        }
        setOrderId(data?.orderId || '')
        setIsOpen(true)


        //  очистка после успеха
        clearCart()
        resetForm?.()
    }catch (error) {
        console.error('Помилка мережі:', error);
        alert('Помилка мережі.');
      }finally {
      setIsSubmitting(false)
      }
    }

   
  return (
    <>
      <button className={className} onClick={handleSendOrder} disabled={isSubmitting}>
      {isSubmitting ? 'Відправляю...' : 'Оформити замовлення'}
    </button>
    {isOpen && (
      
      <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setIsOpen(false)}>&times;</button>
      <h3>Замовлення оформлено 📦</h3>
      <p>Дякуємо! Ми зв’яжемося з вами найближчим часом ✨</p>
      {orderId && (
      <p><strong>Номер замовлення:</strong> {orderId}</p>
      )}
      
      </div>
      </div>
      )}
    </>
  )
}
