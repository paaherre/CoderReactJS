import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import "./Cart.css"


const generarOrden = (cart, totalPrec) => {
    let orden = {}

    orden.buyer = { name: 'juan', phone: 'my phone', email: 'pepe@aol.com.ar' }
    orden.total = totalPrec
    orden.items = cart.map(cartItem => {
        const id = cartItem.item.id;
        const nombre = cartItem.item.nombre;
        const precio = cartItem.item.precio * cartItem.cantidad;

        return { id, nombre, precio }
    })

    console.log(orden);
}


const Cart = () => {
    const { cart, removeItem, clear, totalCant, totalPrec } = useContext(CartContext)


    return (
        <div>
            {
                !cart.length ?
                    <h2> No hay items en el carrito <Link to='/'> Ir al Home</Link></h2>
                    : (<>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(cartItem =>
                                    <tr key={cartItem.item.id}>
                                        <td> {cartItem.item.nombre} </td>
                                        <td> {cartItem.item.precio}</td>
                                        <td> {cartItem.cantidad} </td>
                                        <td> {cartItem.cantidad * cartItem.item.precio}</td>
                                        <td><Button variant="danger" onClick={() => removeItem(cartItem.item.id)}> Quitar </Button></td>
                                    </tr>
                                )}
                                <tr>
                                    <td colSpan="2">Cantidad de Productos: {totalCant}</td>
                                    <td colSpan="2">TOTAL: {totalPrec}</td>
                                    <td><Button variant="danger" onClick={() => clear()}>Vaciar Carrito</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button variant="success" onClick={() => generarOrden(cart, totalPrec)}>Finalizar Compra</Button>
                    </>
                    )
            }

        </div>
    )

}

export default Cart;