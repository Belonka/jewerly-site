'use client'

// import { useState } from 'react';
// import { useCart } from '@/context/CartContext'

// export default function CheckoutForm() {
//     const { cartItems } = useCart()
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         phone: '',
        
//         comment: '',
        
//     })

//     const total = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0)
//     const handleChange = (e) => {
//         const {name, value, type, checked} = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked:value,
//         }))
//     };

    

//     const handleSubmit = async (e) => {
//       e.preventDefault()
//       const orderData = {
//           name: `${formData.firstName} ${formData.lastName}`.trim(),
//           phone: formData.phone,
//           // email: formData.email,
//           comment: formData.comment,
//           items: cartItems,
//           total,
//       }


//     try{
//         const response = await fetch('/api/send-order', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(orderData)
//         });

//         if(response.ok) {
//            alert('Замовлення відправлено в Telegram!');
//         }else {
//             alert(' Помилка при відправці замовлення.');
//           }
//     }catch (error) {
//         console.error('Помилка мережі:', error);
//         alert('Помилка мережі.');
//       }
// }

  return (
    <>
    {/* <div>
      <form onSubmit={handleChange} className='checkout-form'> */}
        {/* <h2> Покупець</h2>
        <input type="text" 
        name='firstName'
        placeholder=''
        value={formData.firstName}
        onChange={handleChange}
        required
        minLength={3}
        maxLength={22}
        />
        <input type="text" 
        name='lastName'
        placeholder=''
        value={formData.lastName}
        onChange={handleChange}
        required
        minLength={3}
        maxLength={22}
        />
        <input type="tel" 
        name='phone'
        placeholder=''
        value={formData.phone}
        onChange={handleChange}
        required
        minLength={3}
        maxLength={22}
        />
        <input type="email" 
        name='email'
        placeholder=''
        value={formData.email}
        onChange={handleChange}
        />
        <label>
        <input
          type="checkbox"
          name="noCallback"
          checked={formData.noCallback}
          onChange={handleChange}
        />
        Не передзвонювати
      </label>
        <textarea 
        name='comment'
        placeholder=''
        value={formData.comment}
        onChange={handleChange}
        
        /> */}
        {/* <button type="submit" onClick={handleSubmit}  className="btn-2 btn-send-order">
        Оформити замовлення
        </button>
      </form>
    </div>
    <div> */}
      
      {/* <button className={className} onClick={handleSendOrder}>
      Оформити замовлення
    </button> */}
    {/* </div> */}
    </>
  )
//}
