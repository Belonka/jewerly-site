'use client'
import Link from "next/link"
import {useState} from 'react'

export default function ModalTextContent({title, text}) {
  const [formData, setFormData] =useState({
    name: '',
    phone:'',
    comment:'',
    subscribe: false,
  }) 
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/connect-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Повідомлення надіслано!");
        setFormData({
          name: '',
          phone: '',
          comment: '',
          subscribe: false,
        });
      } else {
        setStatus("❌ Помилка: " + data.message);
      }
    } catch (err) {
      setStatus("❌ Сталася помилка при надсиланні");
    }
  };
  return (
    <div>
       <h3>{title}</h3>
        <p>{text}</p>
        <form action="" className="modal-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Ваше ім'я" name="name" value={formData.name} onChange={handleChange} required/>
          <input type="tel" placeholder="Номер телефону" name="phone" value={formData.phone} onChange={handleChange} required/>
          <textarea  placeholder=" Коментар" name="name" value={formData.comment} onChange={handleChange} className="comment-input"/>

          <div className='checkbox-wrapper'>
        <input type="checkbox" id='subscribe' name='subscribe' checked={formData.subscribe} onChange={handleChange} />
        <label>
          Я бажаю отримувати на електронну поштову скриньку найсвіжіші новини  та погоджуюся з {''} <Link className='footer-politice' href='/polityka_pryvatnosti'>Політикою конфіденційності.</Link>
          </label> 
        </div>
          <button type="submit" className="btn-2">Надіслати</button>
        </form>
        {status && <p>{status}</p>}
    </div>
    
  )
}
