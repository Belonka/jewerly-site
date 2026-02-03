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
  console.log("✅ getJewelryData fetched:", res?.length, res?.[0]); // <-- важно
  return res;
}

