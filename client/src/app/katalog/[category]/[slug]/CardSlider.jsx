'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { resolveImage } from "@/lib/resolveImage";

export default function CardSlider({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const openZoom = (idx) => {
    setActiveIndex(idx);
    setIsZoomOpen(true);
    document.body.style.overflow = 'hidden'; 
  };
  const closeZoom = () => {
    setIsZoomOpen(false);
    document.body.style.overflow = '';
  };


  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
        }}
        spaceBetween={30}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="cardSwiper-main"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {images.map((src, idx) => (
          
          <SwiperSlide key={idx}>
            <img
                src={resolveImage(src)}
                alt={`Зображення ${idx + 1}`}
                onClick={() => openZoom(idx)}
                onError={(e) => {
                  e.currentTarget.src = "/images/fallback.jpg"; // лежит в /public/images/
                }}
              />
           
          </SwiperSlide>
        ))}
        {/* {images.map((item, idx) => {
          const src = typeof item === "string" ? item : item?.src;

          return (
          <SwiperSlide key={idx}>
            <img
              src={resolveImage(src)}
              alt={item?.alt || `Зображення ${idx + 1}`}
              onClick={() => openZoom(idx)}
              onError={(e) => {
                e.currentTarget.src = "/images/fallback.jpg";
              }}
            />
          </SwiperSlide>
         )
      })} */}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        centerInsufficientSlides={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="cardSwiper-thumbs"
      >
        {/* {images.map((item, idx) => {
          const src = typeof item === "string" ? item : item?.src;

          return (
          <SwiperSlide key={idx}>
            <img
              src={resolveImage(src)}
              alt={item?.alt || `Зображення ${idx + 1}`}
              onError={(e) => {
                e.currentTarget.src = "/images/fallback.jpg";
              }}
            />
          </SwiperSlide>
          )
        })} */}
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
                src={resolveImage(src)}
                alt={`Зображення ${idx + 1}`}
                
                onError={(e) => {
                  e.currentTarget.src = "/images/fallback.jpg"; 
                }}
              />
           
          </SwiperSlide>
        ))}
      </Swiper>
      {isZoomOpen && (
        <div
          className="zoomOverlay"
          role="dialog"
          aria-modal="true"
          onClick={closeZoom}
        >
          <button className="zoomClose" onClick={closeZoom} aria-label="Close">
            ✕
          </button>

          {/* стопаем закрытие при клике по изображению */}
          <div className="zoomContent" onClick={(e) => e.stopPropagation()}>
            {(() => {
        const item = images?.[activeIndex];
        const src = typeof item === "string" ? item : item?.src;
        const resolved = resolveImage(src);

        if (!resolved) return null;

              return (
                <img
                  className="zoomImage"
                  src={resolveImage(src) || "/images/fallback.jpg"}
                  alt={(typeof item === "object" && item?.alt) ? item.alt : `Зображення ${activeIndex + 1}`}
                  onError={(e) => {
                    e.currentTarget.src = "/images/fallback.jpg";
                  }}
                />
              )
            {/* <img
              className="zoomImage"
              src={resolveImage(images[activeIndex])}
              alt={`Зображення ${activeIndex + 1}`}
              onError={(e) => {
                e.currentTarget.src = "/images/fallback.jpg";
              }}
            /> */}
            })()}
          </div>
        </div>
      )}
    </>
  );
}