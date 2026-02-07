"use client"
import Link from "next/link";
import Image from "next/image";
import Button from '../button/Button' ;
import { resolveImage } from "@/lib/resolveImage";


export default function Card({ item }) {
  const imgSrc = resolveImage(item.images?.[0] ?? "");

  return (
    <>
    <div className="card">
      {item.isNew && <span className="badge-new">NEW</span>}
      <Link href={`/katalog/${item.category}/${item.slug}`} 
      className="card-link">
      <div className="card-img-container">
        <Image 
          src={imgSrc}
        // src={item.images[0]} 
        alt={item.name} 
        fill
        // width={400}
        // height={250}
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
