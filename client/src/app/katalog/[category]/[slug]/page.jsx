

import {getJewelryData} from '@/lib/getJewelryData';
// import ZoomGallery from '@/components/modals/ZoomGallery';
import Breadcrumbs from '@/components/breadcrumbs/BreadCrumbs';
import CardSlider from './CardSlider'
import Button from '@/components/button/Button';
// import { toAssetUrl } from "@/lib/assets";
import { resolveImage } from "@/lib/resolveImage";


export const dynamicParams = false;
// const images = item.images.map(toAssetUrl);

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

  const ogImage = item.images?.[0] ? resolveImage(item.images[0]) : undefined;

  return {
    title: `${item.name} — Vetola`,
    description: `Купіть ${item.name} за ${item.price} грн. Унікальні прикраси.`,
    openGraph: {
      title: `${item.name} — Vetola`,
      description:  `Купіть ${item.name} за ${item.price} грн. Унікальні прикраси.`,
      images: ogImage ? [ogImage] : [],
      // images: item.images[0],
    },
    twitter: {
      card: "summary_large_image",
      title: item.name,
      description: `Ціна: ${item.price} грн`,
      images: ogImage ? [ogImage] : [],
      // images: item.images[0],
    },
  };
}

export default async function PageItem({ params }) {
  const { category, slug } = await params;
  const jewelryData = await getJewelryData();


  const item = jewelryData.find(
    (item) => item.category === category && item.slug === slug
  );
      

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
    <div className="item-page">
      <Breadcrumbs items={breadcrumbItems} />
      <h2>{item.name}</h2>
      <div className="image-gallery">
        <CardSlider images={item.images ?? []} />
      {/* <CardSlider images={images} />  */}
      {/* <CardSlider images={item.images} />  */}
      
      <div className='item-details'>
      <p className="p-price">
       
        <strong>Ціна:</strong> {item.price} грн
      </p>
      </div>
      
      {item.material && (
    <p className="p-price">
      <strong>Матеріал:</strong> {item.material}
    </p>
  )}

  {item.description && (<p className="p-price">
    <strong>Опис: </strong>{item.description}</p>)}

  {item.size && (
    <p className="p-price">
      <strong>Розмір:</strong> {item.size}
    </p>
  )}
 
    <Button item={item} />
      </div>
      </div>
      
     
  );
}
