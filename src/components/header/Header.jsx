"use client" 
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/katalog", label: "Каталог" },
  { href: "/katalog/nabory", label: "Набори" },
  { href: "/katalog/braslety", label: "Браслети" },
  { href: "/katalog/kabluchky", label: "Кільця" },
  { href: "/katalog/lantsiuzhky", label: "Ланцюжки" },
  { href: "/#contacts", label: "Контакти" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuToggle = () => {
    setMenuOpen(prev => !prev)
  }

  const privateRoom = [
    {
      href: "https://instagram.com/vetola.jewellery",
      icon: "/icons/profile.svg",
      alt: "Profile",
    },
    
    {
      href: "/shopping-cart",
      icon: "/icons/shopping-cart.svg",
      alt: "Cart",
    },
  ];

  return (
    <header className={`header flex-cl container ${menuOpen ? "menu-active" : ""}`}>
      <div className="header-top flex-sb">
        <h1>
          <Link href="/">VETOLA</Link>
        </h1>
        <div className="header-contact flex-sb">
          <a href="tel:+14203659">+380 95 819 80 65</a>
          <button className="btn-2">Зв'язатись з нами</button>

        
        <nav>
                  <ul className="private-room">
                    {privateRoom.map(({ href, icon, alt }) => (
                      <li key={href}>
                        <Link href={href}  aria-label={alt}>
                          <Image src={icon} alt={alt} width={24} height={24} priority />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                </div>
        <div className="burger-menu-container"  onClick={menuToggle}>
                        <div className="burger-icon flex-cl">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
      </div>
      <div className="header-bottom">
      <nav>
          <ul>
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
