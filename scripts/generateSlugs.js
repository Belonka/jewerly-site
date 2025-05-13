import fs from 'fs';
import path from 'path';

// Путь к твоему JSON
const jewelryPath = path.join(process.cwd(), 'data', 'jewelry.json');
const jewelry = JSON.parse(fs.readFileSync(jewelryPath, 'utf-8'));

// Функция slugify
function slugify(str) {
  const map = {
    а: 'a', б: 'b', в: 'v', г: 'h', ґ: 'g', д: 'd',
    е: 'e', є: 'ie', ж: 'zh', з: 'z', и: 'y', і: 'i',
    ї: 'i', й: 'i', к: 'k', л: 'l', м: 'm', н: 'n',
    о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u',
    ф: 'f', х: 'kh', ц: 'ts', ч: 'ch', ш: 'sh',
    щ: 'shch', ь: '', ю: 'iu', я: 'ia',
    "'": '', "’": ''
  };

  return str
    .toLowerCase()
    .split('')
    .map(char => map[char] || char)
    .join('')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}


const updatedJewelry = jewelry.map(item => ({
  ...item,
  slug: slugify(item.name)
}));


fs.writeFileSync(jewelryPath, JSON.stringify(updatedJewelry, null, 2), 'utf-8');

console.log('✅ Slugs добавлены в jewelry.json');
