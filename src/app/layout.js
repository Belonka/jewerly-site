import { Open_Sans, Cormorant_Garamond } from "next/font/google";
import "@/assets/main.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { CartProvider } from "@/context/CartContext";
// import ModalCart from "@/app/modalCart/ModalCart";

const openSans =  Open_Sans({
  variable: "--font-open-sans",
  subsets: ["cyrillic"],
});

const cormorantGaramondMono = Cormorant_Garamond({
  variable: "--font-cormorant_garamond",
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata = {
  title: "Vetola",
  description:
    "Онлайн  магазин стильних та унікальних прикрас. Обирайте каблучки, сережки, браслети та намиста з якісних матеріалів. Ідеальний вибір для подарунка чи власного образу.",
    keywords: ['прикраси', 'біжутерія', 'онлайн-магазин'],
  icons: {
    icon: "icons/favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={`${openSans.variable} ${cormorantGaramondMono.variable}`}>
      <CartProvider>
        <Header />
        {/* <ModalCart />  */}
        <main>
        {children}
        </main>
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
