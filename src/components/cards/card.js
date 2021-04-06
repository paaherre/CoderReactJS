import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./card.css";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const Card = ({ id, img, title, descripcion, stock }) => {

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
                <Button className="btn-masInfo"><Link className="btn-link" to={`/itemDetail/${id}`}> + Información </Link></Button>
                <ItemCount stock={stock} initial='1' />
                <Button variant="success" className="btn-addCart">Agregar al Carrito</Button>
            </div>
        </div>
    );
};

export default Card;

