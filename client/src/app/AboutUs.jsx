
import Link from 'next/link'
export default function AboutUs() {
  return (
    <section className="aboutUs-main container ">
      <h2>Про нас</h2>
    <div className=" aboutUs">
      
      
       <div className="about-video-section">
      <video className="about-video"
      autoPlay
      muted
      loop
      playsInline>
      <source src="/images/VideoAbout.mp4" type="video/mp4"/> Ваш браузер не підтримує відтворення відео</video>
      </div>
      <div className="aboutUs-text">
        <p><strong>Vetola</strong> — це більше, ніж просто прикраси. Це історія про натхнення, стиль і любов до деталей. Наш інтернет-магазин створений для тих, хто цінує унікальні речі та вишукану естетику.</p>
        <br/> <p>Ми віримо, що прикраси — це не просто аксесуари, а спосіб виразити себе, настрій, характер і навіть мрію. У нашому каталозі ви знайдете каблучки, сережки, браслети, намиста та інші вироби, створені з турботою про якість і комфорт. Ми постійно оновлюємо асортимент, щоб надихати вас щодня виглядати особливо.   </p>
    <Link href='/katalog' className="btn-1">Подивитися асортимент</Link>
       </div>
       
    </div>
    </section>
  )
}
