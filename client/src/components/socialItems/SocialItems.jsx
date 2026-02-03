import Image from "next/image";
import Link from 'next/link'

export default function SocialItems({className, withLabels = false }) {
    const socials = [
        {
          href: "https://instagram.com/vetola.jewellery",
          icon: "/icons/instagram2.svg",
          alt: "Instagram",
          label: "Instagram",
        },
        { href: "tel:+380 95 819 80 65", 
            icon: "/icons/phone.svg", 
            alt: "" ,
            label: "+380 95 819 80 65",
        },
        {
          href: "https://t.me/yourTelegram",
          icon: "/icons/telegram.svg",
          alt: "Telegram",
          label: "Telegram",
        },
      ];

      const changeClassName = `${className}`
  return (
    <div>
      <nav>
                <ul className={changeClassName}>
                  {socials.map(({ href, icon, alt, label }) => (
                    <li key={href}>
                      <a href={href} target="_blank" aria-label={alt}>
                        <Image src={icon} alt={alt} width={24} height={24} priority />
                        
                      </a>
                      <Link href={href} className="socialTitle-Link">{withLabels && <span>{label}</span>}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
    </div>
  )
}

