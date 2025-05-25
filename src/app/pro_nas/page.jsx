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
    
    <section className='section-2 container pro-nas'>
    <Breadcrumbs items={breadcrumbItems} />
    <div className='image-box'>
        <img src="/images/imageAbout.png" alt="" className='about-img' />
        </div>  
    <div className='about-container'>
      <h2 > Vetola — </h2><h3>це простір краси, стилю та натхнення. </h3><br />
      <p className='aboutPage-text'>Ми створили наш магазин із бажанням зробити стильні прикраси доступними кожній дівчині та жінці, яка хоче підкреслити свою індивідуальність. У Vetola ми зібрали колекції, що поєднують елегантність, легкість та сучасні тренди.</p>

<p className='aboutPage-text'>Наші прикраси — це не просто доповнення до образу, це спосіб сказати світові щось про себе: бути сміливою, ніжною, яскравою або стриманою.</p>

<p className='aboutPage-text'>Ми уважно ставимося до підбору кожного виробу, щоб ви отримували не просто красиву річ, а задоволення від покупки. Vetola — це про гармонію зовнішнього вигляду та внутрішнього стану.</p>

<p className='aboutPage-text'>Долучайтеся до нашої спільноти і дозвольте собі трішки більше блиску щодня!</p>




</div>
    
    <div className='flex-sb about-conditions'>
    
        <ul className='about-category'>
        <li><img src="/icons/gift.svg" alt="" /></li>
          <li>Шукаєте подарунок? У нас є чудові ідеї для ваших близьких.</li>
          
          </ul>
        <ul className='about-category'>
        <li><img src="/icons/shipping.svg" alt="" /></li>
          <li>Замовлення пакуються з любов’ю та надсилаються по всій Україні та за кордон.</li>
          
          </ul>
        <ul className='about-category'> 
        <li><img src="/icons/person.svg" alt="" /></li>
          <li>Ми дбаємо про кожного клієнта, тому завжди відкриті до зворотного зв’язку.</li>
          
          </ul>
        
        </div>
        
        <h4 className='aboutPage-text'>Дякуємо, що обираєте <strong>Vetola</strong>. Ми раді бути частиною вашого стилю та історії.</h4>
        </section>
    
    </>
  )
}
