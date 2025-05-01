import Image from "next/image";
import Link from "next/link";

export default function NewItemsBlock({ items }) {
  const newItems = items.filter((item) => item.isNew);

  return (
    <section className="section-2 container">
      <h2 className="h2-newItems">Нові надходження</h2>

      <div className="container-card">
        {newItems.map((item) => (
          <Link href="#">
            <div className="card" key={item.id}>
              <div className="new-item-img-container">
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  className="card-image"
                  width={300}
                  height={350}
                />
              </div>
              <h3 className="card-title">{item.name}</h3>
              <p className="p-price">
                {" "}
                <strong>Ціна:</strong> {item.price} грн
              </p>
            </div>
          </Link>
        ))}
        <button className="btn btn-buy">Купити </button>
      </div>

      <button className="btn-newItem btn-2">
        <Link href="./catalog/Rings.jsx">Дивитися всі</Link>
      </button>
    </section>
  );
}
