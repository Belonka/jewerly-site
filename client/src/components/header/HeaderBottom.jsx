
import Link from "next/link";
export const navItems = [
    { href: "/katalog", label: "Каталог" },
    { href: "/katalog/nabory", label: "Набори" },
    { href: "/katalog/braslety", label: "Браслети" },
    { href: "/katalog/kabluchky", label: "Кільця" },
    { href: "/katalog/lantsiuzhky", label: "Ланцюжки" },
    { href: "/kontakty", label: "Контакти" },
  ];

export default function HeaderBottom({ items = navItems , variant, className, firstItemClass, closeMenu }) {
    

      const fullClassName = `header-bottom ${variant} ${className}`.trim();

  return (
     <div className={fullClassName}>
      <nav>
          <ul>
            {items.map(({ href, label }, index) => (
              <li key={href} className={index === 0 ? firstItemClass : undefined}>
                
                <Link href={href} onClick={closeMenu}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
  )
}
