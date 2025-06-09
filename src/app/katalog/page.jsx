import {getJewelryData} from '@/lib/getJewelryData';
import Link from "next/link";
import CatalogSlider from "@/app/katalog/CatalogSlider";
import Breadcrumbs from '@/components/breadcrumbs/BreadCrumbs';

export const metadata = {
  title: "Каталог прикрас Vetola",
  description:
    "Онлайн  магазин стильних та унікальних прикрас. Обирайте каблучки, сережки, браслети та намиста з якісних матеріалів. Ідеальний вибір для подарунка чи власного образу.",
    keywords: ['прикраси', 'біжутерія', 'онлайн-магазин'],
    openGraph: {
      title: 'Головна — Мій Сайт',
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
    locale: 'uk_UA',
    type: 'website',
  },
};
    


export default async function CatalogPage() {
  const data = await getJewelryData();

  const categories = [...new Set(data.map((item) => item.category))];


  const breadcrumbItems = [
    {
      name: "Каталог",
      link: null,
    },
  ];
  return (
    <section className="container section-2">
      <Breadcrumbs items={breadcrumbItems} />
      {categories.map((category) => {
        const filteredItems = data.filter(
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

