import React, { useState, useEffect } from "react";
import Card from "../components/cards/card";
import "./ListContainer.css";
import PropTypes from 'prop-types';
import { useParams } from "react-router";
import { getFirestore } from "../firebase";



const ListContainer = () => {
    const [items, setItems] = useState([]);
    const { itemParam } = useParams()

    useEffect(() => {

        const db = getFirestore();
        const itemsCollection = db.collection('productos')

        if (itemParam) {
            const filtro = itemsCollection.where('categoria', '==', itemParam)
            const promFilter = filtro.get();

            promFilter.then((snapshot) => {
                if (snapshot.size > 0) {
                    console.log(snapshot.docs)
                    setItems(snapshot.docs.map(doc => {
                        return { id: doc.id, ...doc.data() }
                    }))
                }
            })
        } else {
            const promise = itemsCollection.get();
            promise.then((snapshot) => {
                if (snapshot.size > 0) {
                    console.log(snapshot.docs)
                    setItems(snapshot.docs.map(doc => {
                        return { id: doc.id, ...doc.data() }
                    }))
                }
            })
        }
    }, [itemParam])

    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row" >
                {items.map((item) => (
                    <div className="col-md-4" key={item.id}>
                        <Card id={item.id} title={item.nombre} img={item.img} descripcion={item.descripcion} stock={item.stock} />
                    </div>
                ))}
            </div>
        </div>
    );

}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    descripcion: PropTypes.string
}

export default ListContainer;