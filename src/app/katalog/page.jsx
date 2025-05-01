import jewelry from "../../../data/jewelry.json";
import Link from "next/link";
import CatalogSlider from "@/components/slider/CatalogSlider";

export const metadata = {
  title: "Каталог прикрас Vetola",
  description:
    "Онлайн каталог стильних та унікальних прикрас ручної роботи. Обирайте каблучки, сережки, браслети та намиста з якісних матеріалів. Ідеальний вибір для подарунка чи власного образу.",
  openGraph: {},
};

export default function CatalogPage() {
  const categories = [...new Set(jewelry.map((item) => item.category))];
  return (
    <section className="">
      {categories.map((category) => {
        const filteredItems = jewelry.filter(
          (item) => item.category === category
        );
        const categoryNameUkr = filteredItems[0]?.categoryUkr || category;

        return (
          <div key={category} className="category-section">
            <Link href={`/katalog/${category}`}>
              <h2 className="">{categoryNameUkr}</h2>
            </Link>

            <CatalogSlider items={filteredItems} />

            <div className="btn-category">
              <Link href={`/katalog/${category}`}>
                <button className="btn-2 ">Дивитись більше</button>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}

// import {getJewelryData} from '../../lib/getJewelryData'
// import Header from "@/components/header/Header";
// import Footer from '@/components/footer/Footer';
// import JewelryNavAside from '@/app/katalog/JewelryNavAside';

// export default async function KatalogPage() {

//     const jewelryData = await getJewelryData()
//     const categories = [...new Set(jewelryData.map(item => item.category))]

//     if(!jewelryData || jewelryData.length === 0) {
//         throw new Error("Error fetching single post data")
//     }
//     return(
//         <>
//         <Header />
//         <JewelryNavAside />
//         <section className=' section-2 container'>
//             <div className=''>
//             {categories.map(category => {
//                 const filteredJewelry = jewelryData.filter(item => item.category === category)

//             return(
//                 <div key={category} className='category-section'>
//                     <h3 className='category-title'>{category}</h3>
//                 <div className='container-card'>
//         {filteredJewelry.map((item) => (

//             <div className='card' key={item.id}>
//              <img className='new-item-img-container' src={item.image} alt={item.name}/>
//              <h3 className='card-title'>{item.name}</h3>
//              <p className='p-price'> <strong>Ціна:</strong> {item.price} грн</p>
//             </div>
//             ))}

//             </div>
//             <button className='btn-2 btn-category'>Дивитись більше</button>
//             </div>
//         )

//         })}
//         </div>
//         </section>
//         <Footer/>
//         </>
//     )
// }

{
  /* <div className=" slider-container">
        {filteredItems.map(item => (

          <li key={item.id} className="card ">
            <Link href={`/catalog/${item.category}/${item.id}`}>
         
                <img className='new-item-img-container'
                  src={item.image}
                  alt={item.name}
                 
                />
                <h3 className="card-title">{item.name}</h3>

            </Link>
            <p className='p-price'> <strong>Ціна:</strong> {item.price} грн</p>
          </li>
        ))}
      </div> */
}
