import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import "./Cart.css"

import 'firebase/firestore'
import Modal from '../modal/Modal'
import Formulario from '../modal/Modal';



const Cart = () => {
    const { cart, removeItem, clear, totalCant, totalPrec } = useContext(CartContext)
    const [modalShow, setModalShow] = useState(false);

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
                        <Modal show={modalShow} onHide={() => setModalShow(false)}>
                            <Formulario />
                        </Modal>
                        <Button variant="success" onClick={() => setModalShow(true)}>Finalizar Compra</Button>

                    </>
                    )
            }
        </div>
    )
}

export default Cart;