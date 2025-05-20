import Card from "../components/card/Card";
import Link from "next/link";

export default function NewItemsBlock({ items }) {
  const newItems = items.filter((item) => item.isNew);

  return (
    <section className="section-2 container new-items">
      <h2 className="h2-newItems">Нові надходження</h2>

      <div className="container-card">
        {newItems.map((item) => (
       <Card key={item.id} item={item} /> 
        ))} 
      </div>

        <Link className="btn-newItem btn-2" href="/katalog">Дивитися всі</Link>

    </section>
  );
}
