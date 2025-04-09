import Header from "@/components/header/Header";
import {getJewelryData} from '../lib/getJewelryData.js'
import Image from "next/image";
import Link from "next/link";
import HeroBlock from "./HeroBlock";
import NewItemsBlock from "./NewItemsBlock";


export default async function Home() {
  const jewelryData = await getJewelryData();
  return (
    <div >
      <Header/>
      <main >
       <HeroBlock />
<NewItemsBlock items={jewelryData}/>
       
      </main>
      <footer >
     
      </footer>
    </div>
  );
}
