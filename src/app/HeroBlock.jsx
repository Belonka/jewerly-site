
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

  return (
    <>
    <div>
      
      <Modal title="Замовити консультацію" text="Заповніть форму і ми з вами зв'яжемося в робочий час." isOpen={activeModal === 'consult'} onClose={() => setActiveModal(null)}/>

      <Modal title="Купівля товару" text="Оформіть покупку прямо зараз. Ми з вами зв'яжемося." isOpen={activeModal === 'buy'} onClose={() => setActiveModal(null)} />

    </div>
    <section className="hero-section section-2">
      <div className="container">

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

        <div className="name-title">
          <h2> Сучасні прикраси </h2> 
          <h3>Твій стиль починається тут</h3>
        
        
        <Link href="/katalog" className="btn-1"> Дивитися асортимент</Link>
        <button className="btn-3" onClick={() => setActiveModal('consult')}>Замовити консультацію</button>
        </div>
      </div>
     
    </section>
    </>
  )
}
