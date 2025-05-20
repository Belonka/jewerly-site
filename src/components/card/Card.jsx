
import Link from "next/link";

export default function Card({ item }) {

  return (
    <>
    <div className="card">
      <div className="card-img-container">
        <img src={item.images[0]} alt={item.name} className="card-image" />
      </div>
      <Link href={`/katalog/${item.category}/${item.slug}`} >
      <h3 className="card-title">{item.name}</h3>
      </Link>
      <p className="p-price">
        <strong>Ціна:</strong> {item.price} грн
      </p>
      <button className="btn btn-buy">Купити</button>
      </div>
    </>
  )
}
