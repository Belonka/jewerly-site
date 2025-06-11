'use client'
import {useCart} from '@/context/CartContext'



export default function SendOrder({ className = '' }) {
const {cartItems} = useCart()

const totalAmount = cartItems.reduce(
    (acc,item) => acc + item.price * item.quantity, 0
);

const handleSendOrder = async() => {
    const orderData = {
        name: 'Ім’я користувача',   
    phone: 'Номер телефону',
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

        if(response.ok) {
           alert('Замовлення відправлено в Telegram!');
        }else {
            alert(' Помилка при відправці замовлення.');
          }
    }catch (error) {
        console.error('Помилка мережі:', error);
        alert('Помилка мережі.');
      }
}

  return (
    <div>
      <button className={className} onClick={handleSendOrder}>
      Оформити замовлення
    </button>
    </div>
  )
}
