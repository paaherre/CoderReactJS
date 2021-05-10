import React from 'react';
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

const navBar = () => {



    return (
        <header className="header">
            <div className="logo">
                <Link to='/'><img src="https://www.pngjoy.com/pngl/206/4033835_horde-horde-symbol-png-download.png" width="70vw" alt="Logo" /></Link>
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