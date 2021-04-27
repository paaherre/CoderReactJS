import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import "./Cart.css"
import { getFirestore } from '../../firebase';
import firebase from 'firebase/app'
import 'firebase/firestore'


const generarOrden = (cart, totalPrec) => {

    const db = getFirestore();
    const ordenCol = db.collection('ordenes');

    let orden = {}

    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.buyer = { name: 'juan', phone: 'my phone', email: 'pepe@aol.com.ar' }
    orden.total = totalPrec
    orden.items = cart.map(cartItem => {
        const id = cartItem.item.id;
        const nombre = cartItem.item.nombre;
        const cantidad = cartItem.cantidad
        const precio = cartItem.item.precio * cartItem.cantidad;

        return { id, nombre, cantidad, precio }
    })
    ordenCol.add(orden)
        .then((IdDocumento) => {
            console.log(IdDocumento.id)
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            console.log('termino la promesa')
        })

    const itemsToUpdate = db.collection('productos').where(
        firebase.firestore.FieldPath.documentId(), 'in', cart.map(p => p.item.id)
    )

    const batch = db.batch();

    itemsToUpdate.get().then(collection => {
        collection.docs.forEach(docSnapshot => {
            batch.update(docSnapshot.ref, {
                stock: docSnapshot.data().stock - cart.find(item => item.item.id === docSnapshot.id).cantidad
            })
        })

        batch.commit().then()
    })
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