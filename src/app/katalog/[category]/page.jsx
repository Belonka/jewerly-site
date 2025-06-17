
import { getJewelryData } from "@/lib/getJewelryData";
import Breadcrumbs from '@/components/breadcrumbs/BreadCrumbs';
import SortItem from "@/components/sortItem/SortItem";


export const dynamicParams = false;

export async function generateStaticParams() {
  const data = await getJewelryData();
  const categories = [...new Set(data.map((item) => item.category))];
  return categories.map((category) => ({category}))
}

export async function generateMetadata({ params }) {
  const { category } = await params;

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

  const categoryUkr = items[0]?.categoryUkr || category;

  const breadcrumbItems = [
    {
      name: "Каталог",
      link: "/katalog",
    },
    {
      name: categoryUkr,
      link: null,
    },
  ];

  return (
    <section className="section-category ">
      <Breadcrumbs items={breadcrumbItems} />
      <h2 className="">{items[0].categoryUkr}</h2>
      <SortItem items={items} />
    </section>
  );
}
