import Button from 'react-bootstrap/Button'
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Badge from 'react-bootstrap/Badge'
import './CartWidget.css';
import { Link } from 'react-router-dom'



const CartWidget = () => {

    const { totalCant } = useContext(CartContext)

    return (
        <div>
            { totalCant ?
                <Link to="/cart"><Button variant="primary"> Cart: <Badge variant="light">{totalCant}</Badge></Button></Link>
                : null}
        </div >
    );
};


export default CartWidget;