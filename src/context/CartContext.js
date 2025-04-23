import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartCount, setCartCount] = useState(0);

    const addToCart = async (id, colorCode, storageCode) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/cart`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id,
                    colorCode,
                    storageCode,
                }),
            });
            const data = await response.json();
            console.log("Response from server", data);
            if (data && data.count) {
                setCartCount(data.count);
            }
        } catch (error) {
            console.error("Error al agregar al carrito", error);
        }
    };

    return (
        <CartContext.Provider value={{ cartCount, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
