import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import "./Cart.css"


const Cart = () => {
    const { cart, addItem, removeItem, clear, totalCant, totalPrec } = useContext(CartContext)



    return (
        <div>
            {
                !cart.length ?
                    <h2> No hay items en el carrito <Link to='/'> Ir al Home</Link></h2>
                    : (<>
                        {cart.map(cartItem =>
                            <div key={cartItem.item.id}>
                                <div> Producto: {cartItem.item.nombre} </div>
                                <div> Precio: {cartItem.item.precio}</div>
                                <div> Cantidad: {cartItem.cantidad} </div>
                                <div> Subtotal: {cartItem.cantidad * cartItem.item.precio}</div>
                                <button onClick={() => removeItem(cartItem.item.id)}> Quitar </button>
                            </div>

                        )}


                        <div>Cantidad de Productos: {totalCant}</div>
                        <div>Precio Productos: {totalPrec}</div>
                        <button onClick={() => clear()}>Vaciar Carrito</button>
                    </>
                    )
            }

        </div>
    )

}

export default Cart;