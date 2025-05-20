import SideBar from "@/components/sideBar/SideBar"

export default function CatalogLayout({ children }) {
  return (
   <>

    <div className="catalog-layout container section-2">
      <SideBar />
 {children}
    </div>

   </>
  );
}
