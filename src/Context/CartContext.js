import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalCant, setTotalCant] = useState(0);
    const [totalPrec, setTotalPrec] = useState(0);

    useEffect(() => {
        let precio = 0;
        let items = 0;
        for (let item of cart) {
            items += item.cantidad;
            precio += item.cantidad * item.item.precio;
        }
        setTotalCant(items);
        setTotalPrec(precio);
    }, [cart])

    const isInCart = (id) => {
        return cart.some(({ item }) => item.id === id);
    }

    const addItem = (item, cantidad) => {


        if (isInCart(item.id)) {

            let newCart = cart.filter(e => e.item.id !== item.id)
            let newCantidad = cart.find(e => e.item.id === item.id).cantidad + cantidad

            setCart([...newCart,
            { item, cantidad: newCantidad }])
            return
        }

        setCart([...cart,
        { item, cantidad }])
    };

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter(({ item }) => item.id !== id));
    };

    return <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalCant, totalPrec }}>{children}</CartContext.Provider>
}