import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../components/itemDetail/ItemDetail'
import { getFirestore } from '../firebase'

const getItems = (id) => {

    const db = getFirestore();
    const itemsCollection = db.collection('productos');
    const prod = itemsCollection.doc(id)

    return prod.get();
}

const ItemDetailContainer = () => {
    const [prod, setProd] = useState([])
    const { itemId } = useParams()

    useEffect(() => {
        getItems(itemId).then((res) => {
            if (res.exists) {
                setProd({ id: res.id, ...res.data() })
            }
        })
        return;
    }, [itemId])

    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row" >
                <div className="col-md-6" key={prod.id}>
                    <ItemDetail item={prod} />
                </div>

            </div>
        </div>
    );

}

export default ItemDetailContainer