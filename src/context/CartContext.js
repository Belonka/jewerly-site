'use client'
import { createContext, useState, useContext, useEffect} from 'react';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() =>{
        const saved = localStorage.getItem('cart');
        if (saved) {
            setCartItems(JSON.parse(saved))
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems]);

    const addToCart = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist) {
            setCartItems((prev) =>{
            return prev.map((item) =>{
            return item.id === product.id ? {...item, quantity: item.quantity + 1} : item
            })
        })
        }else {
            setCartItems((prev) => [...prev, {...product, quantity: 1}])
        }
    };

    const value = {
        cartItems,
        setCartItems,
        addToCart
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export const useCart = () => useContext(CartContext)