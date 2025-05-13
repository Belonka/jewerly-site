"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Link from "next/link";

export default function CatalogSlider({ items }) {

  return (
    <div className="slider-wrapper">
    <div className="custom-prev"> 
    <Image src="/icons/arrow-left.svg" alt="arrow" width={24} height={24} />
    </div>
    <div className="custom-next">
    <Image src="/icons/arrow-right.svg" alt="arrow" width={24} height={24} />
    </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={8}
        navigation={{
          "clickable": true,
          nextEl: '.custom-next',
          prevEl: '.custom-prev'
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card">
              <Link href={`/katalog/${item.category}/${item.slug}`}>
                <img
                  className="new-item-img-container"
                  src={item.images[0]}
                  alt={item.name}
                />
                <h3 className="card-title">{item.name}</h3>
              </Link>
              <p className="p-price">
                {" "}
                <strong>Ціна:</strong> {item.price} грн
              </p>
              <button className="btn btn-buy">Купити</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
