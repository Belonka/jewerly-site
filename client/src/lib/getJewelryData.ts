// import fs from 'fs';
// import path from 'path';


// export async function getJewelryData(){
//     const filePath = path.join(process.cwd(), 'data', 'jewelry.json');
//     const jsonData = fs.readFileSync(filePath, 'utf-8');
//     const jewelryData = JSON.parse(jsonData);
//     return jewelryData;
// }

import { createClient } from "@sanity/client";

console.warn(">>> getJewelryData FILE LOADED v3");
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

if (!projectId || !dataset) {
  throw new Error("Missing Sanity env vars");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,   
  perspective: "previewDrafts",    
});



export async function getJewelryData() {
  const query = `*[_type == "product"]{
    _id,
    "name": title,
    price,
    category,
    categoryUkr,
    "slug": slug.current,
    "images": imageKeys,
    isNew,
    material,
    description,
    size
  } | order(_createdAt desc)`;

  // 
  
  const res = await client.fetch(query);
  const norm = (v: unknown): string =>
  String(v ?? "").trim().toLowerCase();
  const cats = res.map((x) => x.category);
  const uniqueCats: string[] = Array.from(
  new Set(cats.map(norm))
).filter((c): c is string => Boolean(c));

  const counts = uniqueCats.reduce<Record<string, number>>((acc, c) => {
  acc[c] = res.filter((x) => norm(x.category) === c).length;
  return acc;
}, {});

  const missingCategory = res.filter(
  (x) => !norm(x.category)
).length;

  console.log("🔧 Sanity ENV:", {
    projectId,
    dataset,
    hasToken: !!process.env.SANITY_API_READ_TOKEN,
  });
  console.log("✅ getJewelryData fetched:", res?.length);
  console.log("🏷️ categories(unique):", uniqueCats);
  console.log("📊 category counts:", counts);
  console.log("⚠️ missing/empty category count:", missingCategory);

  return res;
}

