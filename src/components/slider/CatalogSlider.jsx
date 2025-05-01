"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import React from "react";
import Link from "next/link";

export default function CatalogSlider({ items }) {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={0}
        navigation={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card">
              <Link href={`/catalog/${item.category}/${item.id}`}>
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
              <button className="btn btn-buy">Купити </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
