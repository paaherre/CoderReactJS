import React, { useState, useEffect } from "react";
import Card from "../components/cards/card";
import item from "../components/item/item";
import "./ListContainer.css";
import PropTypes from 'prop-types';
import { useParams } from "react-router";


const ListContainer = () => {
    const [items, setItems] = useState([]);
    const { itemParam } = useParams()

    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(item);
            }, 2000);
        })

        promesa.then((productos) => {

            if (itemParam) {
                return (
                    setItems(productos.filter((p) => p.categoria === itemParam && p.stock > 0))
                )
            } else {
                setItems(productos)
            }

        });

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