import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div >
      <main >
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
<Link href='/kontakty'>Сторінка контактів</Link>
       
      </main>
      <footer >
     
      </footer>
    </div>
  );
}
