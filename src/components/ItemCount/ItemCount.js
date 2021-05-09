import React, { useContext, useState } from "react"
import './ItemCount.css';
import Button from 'react-bootstrap/Button'
import { CartContext } from "../../Context/CartContext";



const ItemCount = ({ item, stock, initial, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial))
    const [unidades] = useState('u')

    const { addItem } = useContext(CartContext)

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

    const addItemCart = () => {
        addItem(item, count)
        onAdd(count)
    }

    return (
        <div>
            <div>
                <Button variant="danger" className="btnCards" onClick={decrementCount}>-</Button>
                <span>  {count}  </span>
                <span>  {unidades}  </span>
                <Button className="btnCards" onClick={incrementCount}>+</Button>
            </div>
            <Button variant="success" className="btn-addCart" onClick={addItemCart}>Agregar al Carrito</Button>

        </div >
    )

}

export default ItemCount;