import Link from "next/link";

const Breadcrumbs = ({ items: itemsProps } = {}) => {
  const items = [{ name: "Головна", link: "/" }, ...itemsProps];
  return (
    <nav aria-label="навігація по сайту">
      <ul
        className="breadcrumb-section"
        itemType="https://schema.org/BreadcrumbList"
        itemScope
      >
        {items.map((item, index) => (
          <li
            key={index}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {item.link ? (
              <Link
                href={item.link}
                className="active-breadcrumb"
                itemProp="item"
              >
                <span itemProp="name">{item.name}</span>
              </Link>
            ) : (
              <span itemProp="name">{item.name}</span>
            )}
            <meta itemProp="position" content={index + 1} />
            {index < items.length - 1 && (
              <span className="breadcrumb-arrow">/</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
