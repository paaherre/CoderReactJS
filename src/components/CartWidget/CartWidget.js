import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import './CartWidget.css';




const CartWidget = () => {

    const { totalCant } = useContext(CartContext)

    return (
        <div>
            { totalCant ? <i> Carrito: {totalCant}</i> : null}
        </div>
    );
};


export default CartWidget;