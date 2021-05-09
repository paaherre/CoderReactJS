import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './Modal.css'
import Form from 'react-bootstrap/Form'
import { getFirestore } from '../../firebase';
import firebase from 'firebase/app'

const generarOrden = (cart, totalPrec, datos) => {

    const db = getFirestore();
    const ordenCol = db.collection('ordenes');

    let orden = {}

    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.buyer = {
        name: datos.name,
        phone: datos.phone,
        email: datos.email
    }
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
            alert(IdDocumento.id)
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


const Formulario = (props) => {
    const { cart, totalPrec } = useContext(CartContext)
    const [datos, setDatos] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="fontColor">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h4>Ingrese sus datos:</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group controlId="formGridName" >
                            <Form.Label>Nombre y Apelido:</Form.Label>
                            <Form.Control
                                required={true}
                                type="name"
                                placeholder="Name"
                                name='name'
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required={true}
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridPhone">
                            <Form.Label>Teléfono: </Form.Label>
                            <Form.Control
                                required={true}
                                type="phone"
                                placeholder="Sin 0 (11) Sin 15 (12345678)"
                                name="phone"
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => { generarOrden(cart, totalPrec, datos); props.onHide(); }}>Confirmar</Button>
                    <Button variant="danger" onClick={props.onHide}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Formulario;
/*  */