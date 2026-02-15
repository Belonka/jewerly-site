"use client"
import Link from "next/link";
import Image from "next/image";
import Button from '../button/Button' ;
import { resolveImage } from "@/lib/resolveImage";


export default function Card({ item }) {
  const first = item.images?.[0];
  if (!first) return null; 
  const imgSrc = resolveImage(first);
    

  const alt = item.name;
  
  
  return (
    <>
    <div className="card">
      
      <Link href={`/katalog/${item.category}/${item.slug}`} 
      className="card-link">
      <div className="card-img-container">
        {item.isNew && <span className="badge-new">NEW</span>}
        <Image 
          src={imgSrc}
        
        alt={alt} 
        fill
        
        sizes="(max-width: 768px) 100vw, 300px"
        className="card-image" />
      </div>
      
      <h3 className="card-title">{item.name}</h3>
      </Link>
      <p className="p-price">
        <strong>Ціна:</strong> {item.price} грн
      </p>
       <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
      <Button item={item}/>
      </div>
      </div>
    </>
  )
}
