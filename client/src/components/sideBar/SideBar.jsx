"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { title: "Всі прикраси", urlPart: "vsi_prykrasy", id: 1 },
  { title: "Каблучки", urlPart: "kabluchky", id: 2 },
  { title: "Ланцюжки", urlPart: "lantsiuzhky", id: 3 },
  { title: "Набори", urlPart: "nabory", id: 4 },
  { title: "Браслети", urlPart: "braslety", id: 5 },
];

export default function Sidebar() {
  const path = usePathname();
  //   const active = path.split("/")[2] || "vsi_prykrasy";

  return (
    <aside className="sidebar">
      <div className="menu-sidebar">Меню </div>
      <nav className="nav-sideBar">
        <ul>
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`/katalog/${
                  cat.urlPart === "vsi_prykrasy" ? "" : cat.urlPart
                }`}
              >
                <span className="cat-title">
                {cat.urlPart === "vsi_prykrasy" ? "Всі прикраси" : cat.title}
                </span>
                <span className="arrow-icon">→</span>
              </Link>
              
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
