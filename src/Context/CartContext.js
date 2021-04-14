import React, { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const addItem = (item, cantidad) => {
        console.log('add item en cartContext', item);

        if (isInCart(item.id)) {
            console.log("este item ya esta en el carrito");

            setCart([...cart,
            { item, cantidad }])
            return
        }

        setCart([...cart,
        { item, cantidad }])
        console.log(cart);
    };

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter(({ item }) => item.id !== id));
    };

    return <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>{children}</CartContext.Provider>
}