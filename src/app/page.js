import {getJewelryData} from '../lib/getJewelryData.js'
import HeroBlock from "./HeroBlock";
import NewItemsBlock from "./NewItemsBlock";
import AboutUs from './AboutUs.jsx'



export const metadata = {
  title: "Прикраси Vetola | Головна",
  description:
    "Онлайн  магазин стильних та унікальних прикрас. Обирайте каблучки, сережки, браслети та намиста з якісних матеріалів. Ідеальний вибір для подарунка чи власного образу.",
    keywords: ['прикраси', 'біжутерія', 'онлайн-магазин'],
    openGraph: {
      title: 'Головна — Мой Сайт',
    description: 'Стильні прикраси',
    url: 'https://example.com',
    siteName: 'Vetola',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ukr_Ukr',
    type: 'website',
  },
};

export default async function Home() {
  const jewelryData = await getJewelryData();

  return (
    <>
       <HeroBlock />
       <NewItemsBlock items={jewelryData}/>
       <AboutUs/>
    </>
  );
}
