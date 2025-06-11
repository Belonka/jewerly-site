
'use client'
import Link from "next/link"
import Image from "next/image";
import React, { useState } from 'react';
 import Modal from '../components//modals/Modal'

const socials = [
  {
    href: "https://instagram.com/vetola.jewellery",
    icon: "/icons/instagram2.svg",
    alt: "Instagram",
  },
  { href: "tel:+380XXXXXXXXX", icon: "/icons/phone.svg", alt: "" },
  {
    href: "https://t.me/yourTelegram",
    icon: "/icons/telegram.svg",
    alt: "Telegram",
  },
];


export default function HeroBlock() {
  const [activeModal, setActiveModal] = useState(null);

const modalTypeConsult = activeModal === 'consult';

  return (
    <>
    <div>
      
      <Modal title="Замовити консультацію" text="Заповніть форму і ми з вами зв'яжемося в робочий час." isOpen={modalTypeConsult} onClose={() => setActiveModal(null)}/>

      <Modal title="Купівля товару" text="Оформіть покупку прямо зараз. Ми з вами зв'яжемося." isOpen={activeModal === 'buy'} onClose={() => setActiveModal(null)} />

    </div>
    <section className="hero-section ">
      <div className="container">
        <div className="main-header">
        

        <div className="name-title">
          <h2 className="h2-hero">  Вишукані прикраси для натхнення та краси </h2> 
          <h3>Твій стиль починається тут</h3>
        
        
        <Link href="/katalog" className="btn-1 "> Дивитися асортимент</Link>
        <button className="btn-3 btn-consult" onClick={() => setActiveModal('consult')}>Замовити консультацію</button>
        </div>
        <nav>
          <ul className="social-media">
            {socials.map(({ href, icon, alt }) => (
              <li key={href}>
                <a href={href} target="_blank" aria-label={alt}>
                  <Image src={icon} alt={alt} width={24} height={24} priority />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        </div>
      </div>
     
    </section>
    </>
  )
}
