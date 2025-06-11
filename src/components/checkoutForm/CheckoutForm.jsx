'use client'

import React from 'react'

export default function CheckoutForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        comment: '',
        noCallback: true,
    })

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked:value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className='checkout-form'>
        <h2> Покупець</h2>
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
        name=' comment'
        placeholder=''
        value={formData.comment}
        onChange={handleChange}
        
        />
      </form>
    </div>
  )
}
