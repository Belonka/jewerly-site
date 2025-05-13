import { getJewelryData } from "@/lib/getJewelryData";
import Link from "next/link";

export const dynamicParams = false;

export async function generateStaticParams() {
  const data = await getJewelryData();
  const categories = [...new Set(data.map((item) => item.category))];
  return categories.map((category) => ({category}))
}

export async function generateMetadata({ params }) {
  const { category } = params;

  const data = await getJewelryData();
  const itemsInCategory = data.filter((item) => item.category === category);
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const data = await getJewelryData();
  const items = data.filter(item => item.category === category);


  if (!items.length) {
    return <p>Категория «{category}» пуста или не найдена.</p>;
  }



  return (
    <section className="section-2 ">
    <h2 className="">{items[0].categoryUkr}</h2>
      <ul className="container-card-category">
        {items.map(item => (
          <li key={item.id} className="card">
            <Link href={`/katalog/${item.category}/${item.slug}`}>
            
                <img className='new-item-img-container'
                  src={item.images[0]}
                  alt={item.name}
               
                />
                <h3 className="card-title">{item.name}</h3>
              
            </Link>
            <p className='p-price'> <strong>Ціна:</strong> {item.price} грн</p>
            < button className='btn btn-buy'>Купити </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
