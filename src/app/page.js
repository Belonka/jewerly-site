import Header from "@/components/header/Header";
import {getJewelryData} from '../lib/getJewelryData.js'
import HeroBlock from "./HeroBlock";
import NewItemsBlock from "./NewItemsBlock";
import AboutUs from './AboutUs.jsx'
import Footer from '../components/footer/Footer.jsx'

export default async function Home() {
  const jewelryData = await getJewelryData();
  return (
    <div >
      <Header/>
      <main >
       <HeroBlock />
<NewItemsBlock items={jewelryData}/>
       <AboutUs/>
       
      </main>
      <footer >
      <Footer/>
      </footer>
    </div>
  );
}
