import React from 'react';
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

const navBar = () => {



    return (
        <header className="header">
            <div className="logo">
                <img src="#" alt="Logo" />
            </div>
            <div className="menu">
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/juegos/juegos'> Juegos</Link></li>
                    <li><Link to='/accesorios/accesorios'>Accesorios</Link></li>
                </ul>
            </div>
            <div className="cartWidget">
                <CartWidget />
            </div>
        </header>
    )
}

export default navBar;