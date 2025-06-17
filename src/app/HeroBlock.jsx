
'use client'
import Link from "next/link"
import SocialItems from "@/components/socialItems/SocialItems";
import React, { useState } from 'react';
 import Modal from '../components//modals/Modal'



export default function HeroBlock() {
  const [activeModal, setActiveModal] = useState(null);

const isConsultModalOpen = activeModal === 'consult';
const isBuyModalOpen = activeModal === 'buy';
const handleCloseModal = () => setActiveModal(null);
 

  return (
    <>
    <div>
      
      <Modal title="Замовити консультацію" 
      text="Заповніть форму і ми з вами зв'яжемося в робочий час." 
      isOpen={isConsultModalOpen} 
      onClose={handleCloseModal}/>

      <Modal title="Купівля товару" text="Оформіть покупку прямо зараз. Ми з вами зв'яжемося." 
      isOpen={isBuyModalOpen} 
      onClose={handleCloseModal} />

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
        <SocialItems className="social-media"/>
        </div>
      </div>
     
    </section>
    </>
  )
}
