import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'




const ItemDetail = ({ img, title, descripcion, stock, precio }) => {
    const [count, setCount] = useState(0)

    const addHandler = (cantidad) => {
        setCount(cantidad)
    }

    return (
        <div className='card bg-dark text-center animate__animated animate__fadeInUp'>
            <div className='card-body text-light'>
                <div className="card-title tamanio">
                    <h4>{title}</h4>
                </div>
                <div className="img">
                    <img src={img} alt="img" className="img card-img-top" />
                </div>
                <p className='card-text text-secondary'>
                    {
                        descripcion ? descripcion : 'Descripción del producto, click en mas infomración para ver el detalle'
                    }
                </p>
                <h4>Precio: $ {precio}</h4>
                {count === 0 ?
                    <ItemCount stock={stock} initial='1' onAdd={addHandler} />
                    :
                    <Link to='/cart'><Button variant="primary">Terminar la compra</Button></Link>
                }
            </div>
        </div>
    );
};

export default ItemDetail;