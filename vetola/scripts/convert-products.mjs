import fs from "node:fs";

const inputPath = "../client/data/jewelry.json"; 
const outputPath = "./products.ndjson";

const products = JSON.parse(fs.readFileSync(inputPath, "utf8"));

const toDoc = (p) => {
  const slug = p.slug || (p.name || "").toLowerCase().replace(/\s+/g, "-");
  return {
    _type: "product",
    _id: `product.${slug}`, 
    title: p.name,
    slug: { _type: "slug", current: slug },
    price: p.price ?? 0,
    category: p.category,
    categoryUkr: p.categoryUkr,
    isNew: !!p.isNew,
    material: p.material,
    size: p.size,
    imageKeys: Array.isArray(p.images) ? p.images : [], // пока просто строки
  };
};

const lines = products.map((p) => JSON.stringify(toDoc(p))).join("\n");
fs.writeFileSync(outputPath, lines, "utf8");

console.log(`✅ Wrote ${products.length} docs to ${outputPath}`);