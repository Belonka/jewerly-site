import fs from 'fs';
import path from 'path';


export async function getJewelryData(){
    const filePath = path.join(process.cwd(), 'data', 'jewelry.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const jewelryData = JSON.parse(jsonData);
    return jewelryData;
}

