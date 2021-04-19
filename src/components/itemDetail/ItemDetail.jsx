import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';


const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0)
    const { addItem } = useContext(CartContext);

    const addHandler = (contador) => {
        setCount(contador)
    }

    const terminarCompra = () => {
        addItem(item, count)
    }

    return (
        <div className='card bg-dark text-center animate__animated animate__fadeInUp'>
            <div className='card-body text-light'>
                <div className="card-title tamanio">
                    <h4>{item.nombre}</h4>
                </div>
                <div className="img">
                    <img src={item.img} alt="img" className="img card-img-top" />
                </div>
                <p className='card-text text-secondary'>
                    {
                        item.descripcion ? item.descripcion : 'Descripción del producto, click en mas infomración para ver el detalle'
                    }
                </p>
                <h4>Precio: $ {item.precio}</h4>
                {count === 0 ?
                    <ItemCount stock={item.stock} initial='1' onAdd={addHandler} />
                    :
                    <Link to='/cart'>
                        <Button variant="primary" onClick={terminarCompra}>Terminar la compra</Button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default ItemDetail;