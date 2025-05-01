import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import SideBar from "@/components/sideBar/SideBar"

export const metadata = {
  title: "Каталог украшений",
};

export default function CatalogLayout({ children }) {
  return (
   <>
    <Header />
    <div className="flex-sb container section-2">
      <SideBar />
      <main>{children}</main>
    </div>
    <Footer />
   </>
  );
}
