import jewelry from "../../../../data/jewelry.json";
import Link from "next/link";

export default function CategoryPage({ params }) {
  const { category } = params;
  const items = jewelry.filter(item => item.category === category);
  const categoryNameUkr = items[0]?.categoryUkr || category


  if (!items.length) {
    return <p>Категория «{category}» пуста или не найдена.</p>;
  }



  return (
    <>
    <h2 className="">{categoryNameUkr}</h2>
      <ul className="container-card">
        {items.map(item => (
          <li key={item.id} className="card">
            <Link href={`/katalog/${category}/${item.id}`}>
            
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
    </>
  );
}
