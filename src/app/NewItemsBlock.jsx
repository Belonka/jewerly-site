'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function NewItemsBlock({items}) {
  const [swiperRef, setSwiperRef] = useState(null);

  const newItems = items.filter((item) => item.isNew);   

  return (
    <section className='section-2 container'>
      <h2>Нові надходження</h2>
      <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
        
        modules={[Navigation, Pagination]}
        className="mySwiper">
          <div className='container-card'>
          {newItems.map((item) => (
        <SwiperSlide key={item.id}>
        <h3 className='card-title'>{item.name}</h3>
        <img src={item.image} alt={item.name} className='card-image'/>
        <p className='card-price'>{item.price}</p>
        </SwiperSlide>
          ))}
          </div>
      </Swiper>
      
      

    
     

    </section>
  )
}
