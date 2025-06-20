"use client" 
import { useState } from "react";
import { useCart } from '@/context/CartContext';
import Link from "next/link";
import Image from "next/image";
import Modal from '@/components//modals/Modal';
import HeaderBottom from "./HeaderBottom";



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeModal, setActiveModal] = useState(null);
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const isConsultModalOpen = activeModal === 'consult';
  const handleCloseModal = () => setActiveModal(null);

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
    <>
    <div>
      <Modal title="Замовити консультацію" 
            text="Заповніть форму і ми з вами зв'яжемося в робочий час." 
            isOpen={isConsultModalOpen} 
            onClose={handleCloseModal}/>
    </div>
    <header className={`header flex-cl container ${menuOpen ? "menu-active" : ""}`}>
      <div className="header-top flex-sb">
        <h1>
          <Link href="/">VETOLA</Link>
        </h1>
        <div className="header-contact flex-sb">
          <a href="tel:+380958198065">+380 95 819 80 65</a>
          <button className="btn-2" onClick={() => setActiveModal('consult')}>Зв'язатись з нами</button>

        
        <nav>
                  <ul className="private-room">
                    {privateRoom.map(({ href, icon, alt }) => (
                      <li key={href} className="cart-icon-wrapper">
                        <Link href={href}  aria-label={alt}>
                          <Image src={icon} alt={alt} width={24} height={24} priority />
                          {alt === "Cart" && cartCount > 0 && (
                         <span className="cart-count">{cartCount}</span>
                         )}
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
      <HeaderBottom 
      variant="header-style"
      closeMenu={() => setMenuOpen(false)}/>
      
    </header>
    </>
  );
}
