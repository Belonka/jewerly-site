import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs/BreadCrumbs';


export default function page() {

  const breadcrumbItems = [
    
    {
      name: "Про нас",
      link: null,
    },
  ];

  return (
    <>
    
    <section className='section-2 container '>
    <Breadcrumbs items={breadcrumbItems} />
        <img src="/images/imageAbout.png" alt="" className='about-img' />
        
    <div className='about-container'>
      <h3 > Vetola — це простір краси, стилю та натхнення.</h3> <br /><p className='aboutPage-text'>Ми створили наш магазин із бажанням зробити стильні прикраси доступними кожній дівчині та жінці, яка хоче підкреслити свою індивідуальність. У Vetola ми зібрали колекції, що поєднують елегантність, легкість та сучасні тренди.</p>

<p className='aboutPage-text'>Наші прикраси — це не просто доповнення до образу, це спосіб сказати світові щось про себе: бути сміливою, ніжною, яскравою або стриманою.</p>

<p className='aboutPage-text'>Ми уважно ставимося до підбору кожного виробу, щоб ви отримували не просто красиву річ, а задоволення від покупки. Vetola — це про гармонію зовнішнього вигляду та внутрішнього стану.</p>

<p className='aboutPage-text'>Долучайтеся до нашої спільноти і дозвольте собі трішки більше блиску щодня ✨</p>




</div>
    
    <div className='flex-sb about-conditions'>
    
        <div className='about-category'>
        <img src="/icons/gift.svg" alt="" />
          <p>Шукаєте подарунок? У нас є чудові ідеї для ваших близьких.</p>
          
          </div>
        <div className='about-category'>
        <img src="/icons/shipping.svg" alt="" />
          <p>Замовлення пакуються з любов’ю та надсилаються по всій Україні та за кордон.</p>
          
          </div>
        <div className='about-category'> 
        <img src="/icons/person.svg" alt="" />
          <p>Ми дбаємо про кожного клієнта, тому завжди відкриті до зворотного зв’язку.</p>
          
          </div>
        
        </div>
        
        <p className='aboutPage-text'>Дякуємо, що обираєте <strong>Vetola</strong>. Ми раді бути частиною вашого стилю та історії.</p>
        </section>
    
    </>
  )
}
