'use client';

import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear();


  return (
    <>
    <section className='footer-main container section-2'>
        <div>
        <p className='p-bold'>Клієнтам</p>
        <p><Link href='#'>Про нас</Link></p>
        <p><Link href='#'>Оплата і доставка</Link></p>
        <p><Link href='#'>Обмін і повернення</Link></p>
        <p><Link href='#'>Контакти</Link></p>
        </div>
        <div>
        <p className='p-bold'>Зворотній зв'язок</p>
        <p> +380 95 819 80 65</p>
        <p><Link href='#'> Передзвонити Вам?</Link></p>
        </div>
        <div className='form-footer'>
        <p className='p-bold'>Розсилка</p>
            <p>Будьте в курсі наших акцій і новинок</p><br />
        <form action="">
            <input type="email" placeholder='Email'/>
            <button className=''>Надіслати</button>
            
        </form>
        <form action="" className='form-agreement'>
        <input type="checkbox" id='subscribe' name='subscribe'required/>
        <label htmlFor="subscribe">Я бажаю отримувати на електронну поштову скриньку найсвіжіші новини  та погоджуюся з Політикою приватності.</label>
        </form>
        </div>
        
    </section>
    <div className='footer-2 container section-2'>
    <p>Copyright <span>© {year}</span></p>
    

  </div>
  </>
  )
}
