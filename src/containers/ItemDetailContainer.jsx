import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../components/itemDetail/ItemDetail'
import item from '../components/item/item'


const ItemDetailContainer = () => {
    const [prod, setProd] = useState([])
    const { itemId } = useParams()

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(item)
            }, 2000);
        })

        promise.then((producto) => {
            return (

                setProd(producto.filter((p) => p.id === itemId))

            )
        });

    }, [itemId])

    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row" >
                {prod.map((item) => (
                    <div className="col-md-6" key={item.id}>
                        <ItemDetail item={item} />
                    </div>
                ))}
            </div>
        </div>
    );

}

export default ItemDetailContainer