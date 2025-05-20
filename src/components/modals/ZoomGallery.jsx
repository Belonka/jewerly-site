
'use client'
import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';

export default function ZoomGallery({ images }) {
  const [zoomedImage, setZoomedImage] = useState(null);

  const zoomRef = useRef(null);
  const handleMouseMove = (e) => {
    const rect = zoomRef.current?.getBoundingClientRect();
    if(!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) *100;
    const y = ((e.clientY - rect.top) / rect.height) *100;
    zoomRef.current.style.transformOrigin = `${x}% ${y}%`;
    zoomRef.current.style.transform = `scale(2)`;

  }
  const handleMouseLeave = () => {
    zoomRef.current.style.transform = 'scale(1)';
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (zoomedImage) setZoomedImage(null);
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [zoomedImage]);

  return (
    <>
      <div className="image-gallery-zoom">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Image ${idx + 1}`}
            className="lightbox-thumb"
            onClick={(e) => {
              e.stopPropagation(); 
              setZoomedImage(src);
            }}
          />
        ))}
      </div>

      {zoomedImage && (
        <div className="lightbox-overlay" onClick={() => setZoomedImage(null)}>
          <img 
          src={zoomedImage} 
          className="lightbox-full" 
          alt="zoom" 
          ref={zoomRef} 
          onClick={(e) => e.stopPropagation()}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}/>
        </div>
      )}
    </>
  );
}