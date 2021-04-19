import React, { useState } from "react"
import './ItemCount.css';
import Button from 'react-bootstrap/Button'



const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial))
    const [unidades] = useState('u')

    function decrementCount() {
        if (count > 1) {
            setCount(prevCount => prevCount - 1)
        }
    }

    function incrementCount() {
        if (count < stock) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <div>
                <Button variant="danger" className="btnCards" onClick={decrementCount}>-</Button>
                <span>  {count}  </span>
                <span>  {unidades}  </span>
                <Button className="btnCards" onClick={incrementCount}>+</Button>
            </div>
            <Button variant="success" className="btn-addCart" onClick={() => onAdd(count)}>Agregar al Carrito</Button>
        </div>
    )

}

export default ItemCount;