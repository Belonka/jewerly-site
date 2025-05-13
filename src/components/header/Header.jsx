import Link from "next/link";

const navItems = [
  { href: "/katalog", label: "Каталог" },
  { href: "/katalog/nabory", label: "Набори" },
  { href: "/katalog/braslety", label: "Браслети" },
  { href: "/katalog/kabluchky", label: "Кільця" },
  { href: "/katalog/lantsiuzhky", label: "Ланцюжки" },
  { href: "/#contacts", label: "Контакти" },
];

export default function Header() {
  return (
    <header className="header flex-cl container">
      <div className="header-top flex-sb">
        <h1>
          <Link href="/">VETOLA</Link>
        </h1>
        <div className="header-contact flex-sb">
          <a href="tel:+14203659">+380 95 819 80 65</a>
          <button className="btn-2">Зв'язатись з нами</button>
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
