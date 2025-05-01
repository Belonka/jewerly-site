import React from "react";
import jewelry from "../../../../../data/jewelry.json";

export default function pageItem({ params }) {
  const { category, id } = params;
  const item = jewelry.find(
    (item) => item.category === category && String(item.id) === String(id)
  );

  if (!item) {
    return <p>Товар «{item}» не знайдено.</p>;
  }
  return (
    <div className="item-page">
      <h1>{item.name}</h1>
      <img src={item.image[0]} alt={item.name} />
      <p className="p-price">
        {" "}
        <strong>Ціна:</strong> {item.price} грн
      </p>
      <button className="btn btn-buy">Купити </button>
    </div>
  );
}
