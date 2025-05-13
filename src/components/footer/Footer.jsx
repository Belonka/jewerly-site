'use client'
import Link from 'next/link'
import Modal from '../modals/Modal';
import React, { useState } from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);

  const navItems = [
    { href: "/pro_nas", label: "Про нас" },
    { href: "/oplata_i_dostavka", label: "Оплата і доставка" },
    { href: "/obmin_ta_povernennia", label: "Обмін і повернення" },
    { href: "/#contacts", label: "Контакти" },
  ];

  return (
    <footer>
      <Modal title="Замовити консультацію" text="Заповніть форму і ми з вами зв'яжемося в робочий час." isOpen={activeModal === 'consult'} onClose={() => setActiveModal(null)}/>
    <section className='footer-main container section-2'>
        <nav >
        <p className='p-bold'>Клієнтам</p>
        <ul className='flex-cl'>
        {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
               ))}
              </ul>
        </nav>
        <nav>
        <p className='p-bold'>Зворотній зв'язок</p>
        
        <ul className='flex-cl'>
        <a href="tel:+">+380 95 819 80 65</a>
        <p onClick={() => setActiveModal('consult')}> Передзвонити Вам?</p>
        <Modal/>
        </ul>
        <div className="social-media-footer">
       <a href="https://www.instagram.com/vetola.jewellery?igsh=MXVsbWF1azF1MG0wcA==" target="_blank" ><img src="/icons/instagram2.svg" alt="" /></a>
          <a href=""><img src="/icons/telegram.svg" alt="" /></a>
          <a href=""><img src="/icons/phone.svg" alt="" /></a> 
            
        </div>
        </nav>
        <div className='form-footer'>
        <p className='p-bold'>Розсилка</p>
            <p>Будьте в курсі наших акцій і новинок</p>
        <form action="" className='form-agreement'>
            <input type="email" placeholder='Email'/>
            <button type='submit btn' className=''>Надіслати</button>
            
        
        <div className='checkbox-wrapper'>
        <input type="checkbox" id='subscribe' name='subscribe'required/>
        <label htmlFor="subscribe">Я бажаю отримувати на електронну поштову скриньку найсвіжіші новини  та погоджуюся з <Link className='footer-politice' href='/infoPages/politice'>Політикою конфіденційності.</Link></label> 
        </div>
        </form>
        </div>
        
    </section>
    <div className='footer-2 container section-2'>
    <p>Copyright <span>© {year}</span></p>
    

  </div>
  </footer>
  )
}
