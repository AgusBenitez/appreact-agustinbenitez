import React, { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addItem = (item, quantity, price, image, id) => {
        const newItem = {
            item: item,
            quantity: quantity,
            price: price,
            image: image,
            id: id
        }
        setCart((prevState) => [...prevState, newItem]);
    }

    const removeItem = (id) => {
        const borrarItem = cart.find(item => item.id === id);
        const index = cart.indexOf(borrarItem);
        cart.splice(index, 1);
        console.log(cart)
    }

    const clear = () => {
        setCart([]);
    }

    return <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clear }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('Error. UseCart debe usarse dentro de un CartProvider')
    }
    return context;
}