
import Link from "next/link";
import Button from '../button/Button' ;
import { resolveImage } from "@/lib/resolveImage";


export default function Card({ item }) {
  const imgSrc = resolveImage(item.images?.[0] ?? "");

  return (
    <>
    <div className="card">
      {item.isNew && <span className="badge-new">NEW</span>}
      <div className="card-img-container">
        <img 
          src={imgSrc}
        // src={item.images[0]} 
        alt={item.name} 
        className="card-image" />
      </div>
      <Link href={`/katalog/${item.category}/${item.slug}`} >
      <h3 className="card-title">{item.name}</h3>
      </Link>
      <p className="p-price">
        <strong>Ціна:</strong> {item.price} грн
      </p>
      <Button item={item}/>
      </div>
    </>
  )
}
