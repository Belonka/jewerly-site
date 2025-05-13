import {getJewelryData} from '@/lib/getJewelryData';

import Breadcrumbs from '@/components/breadcrumbs/BreadCrumbs';

export const dynamicParams = false;

export async function generateStaticParams() {
  const data = await getJewelryData();

  return data.map((item) => ({
    category: item.category,
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const data = await getJewelryData();
  const item = data.find(
    (i) => i.category === category && i.slug === slug
  );

  if (!item) {
    return {
      title: "Товар не знайдено",
      description: "Схоже, ми не змогли знайти цей товар.",
    };
  }

  return {
    title: `${item.name} — Vetola`,
    description: `Купіть ${item.name} за ${item.price} грн. Унікальні прикраси ручної роботи.`,
    openGraph: {
      title: `${item.name} — Vetola`,
      description:  `Купіть ${item.name} за ${item.price} грн. Унікальні прикраси ручної роботи.`,
      images: item.images[0],
    },
    twitter: {
      card: "summary_large_image",
      title: item.name,
      description: `Ціна: ${item.price} грн`,
      images: item.images[0],
    },
  };
}

export default async function PageItem({ params }) {
  const { category, slug } = await params;
  const jewelryData = await getJewelryData();


  const item = jewelryData.find(
         (item) => item.category === params.category&& item.slug ===  params.slug);
      

  if (!item) {
    return <p>Товар не знайдено.</p>;
  }

  const breadcrumbItems = [
    {
      name: `${item.categoryUkr}`,
      link: `/katalog/${item.category}`,
    },
    { name: `${item.name}`, link: null },
  ];

  return (
    <section className="item-page">
      <Breadcrumbs items={breadcrumbItems} />
      <h2>{item.name}</h2>
      <div >
      {item.images.map((src, idx) => (
        <img className="image-gallery"
          key={idx}
          src={src}
          alt={`${item.name} — фото ${idx + 1}`}
        />
      ))}
      <p className="p-price">
        {" "}
        <strong>Ціна:</strong> {item.price} грн
      </p>
      <p>Опис товару: </p>
      <button className="btn btn-buy">Купити </button>
      </div>
      
     </section>
  );
}
