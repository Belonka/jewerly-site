
import { getJewelryData } from "@/lib/getJewelryData";
import Breadcrumbs from '@/components/breadcrumbs/BreadCrumbs';
import SortItem from "@/components/sortItem/SortItem";

export const dynamicParams = true;

export async function generateStaticParams() {
  const data = await getJewelryData();
  const categories = [...new Set(
  data.map((item) => String(item.category ?? "").trim()).filter(Boolean)
)];
return categories.map((category) => ({ category }));
  // const categories = [...new Set(data.map((item) => item.category))];
  // return categories.map((category) => ({category}))
}

export async function generateMetadata({ params }) {
  const { category } = await params;

  const data = await getJewelryData();
  const itemsInCategory = data.filter((item) => item.category === category);
}

const norm = (v) => decodeURIComponent(String(v ?? "")).trim().toLowerCase();

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const data = await getJewelryData();

  const categoryParam = norm(category);
  const items = data.filter((item) => norm(item.category) === categoryParam);
  // const items = data.filter(item => item.category === category);
  
  
  if (!items.length) {
    const categoriesDebug = [...new Set(data.map((i) => norm(i.category)))].sort();
    return (
      <div style={{ padding: 20 }}>
        <p>Категория «{category}» пуста или не найдена.</p>
        <p><b>Параметр URL (norm):</b> {categoryParam}</p>
        <p><b>Категории в данных (norm):</b> {categoriesDebug.join(", ")}</p>
      </div>
    );
    // return <p>Категория «{category}» пуста или не найдена.</p>;
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
