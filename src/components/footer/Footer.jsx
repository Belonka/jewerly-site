'use client'
import Link from 'next/link'
import Modal from '../modals/Modal';
import React, { useState, useEffect } from 'react';
import SocialItems from "@/components/socialItems/SocialItems";
import HeaderBottom, { navItems }  from "@/components/header/HeaderBottom";

const footerItems = navItems.slice(0, -1);

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);
  const [year, setYear] = useState("")

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  
 

  const navItemsInfo = [
    { href: "/pro_nas", label: "Про нас" },
    { href: "/oplata_i_dostavka", label: "Оплата і доставка" },
    { href: "/obmin_ta_povernennia", label: "Обмін і повернення" },
    { href: "/kontakty", label: "Контакти" },
  ];

  
  
  return (
    <footer>
      <Modal title="Замовити консультацію" text="Заповніть форму і ми з вами зв'яжемося в робочий час." isOpen={activeModal === 'consult'} onClose={() => setActiveModal(null)}/>
    <section className='footer-main container '>
        <nav >
        <p className='p-bold'>Клієнтам</p>
        <ul className='flex-cl ul-footer'>
        {navItemsInfo.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
               ))}
              </ul>
        </nav>
        <HeaderBottom 
          items={footerItems}
          variant="footer-style" 
          className='footer-catalog'
          firstItemClass="p-bold" 
        />
        <nav>
        <p className='p-bold'>Зворотній зв'язок</p>
        
        <ul className='flex-cl ul-footer'>
      <li><a href="tel:+380 95 819 80 65">+380 95 819 80 65</a>
        <p onClick={() => setActiveModal('consult')}> Передзвонити Вам?</p>
        <Modal/></li>
        </ul>
        <SocialItems className="social-media-footer"/>       
        </nav>
       
       
        
    </section>
    <div className='footer-2 container section-2'>
    <p>Copyright <span>© {year}</span></p>
    

  </div>
  </footer>
  )
}
