import React, { useEffect } from "react";
import { useState } from "react";
import {productos} from '../../mock/productos';
import ItemDetail from "../Main/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(() => {
        const getProductos = () =>
        new Promise ((res, rej) =>{
            const product = productos.find((prod) => prod.id === 1)
            setTimeout(()=>{
                res(product)
            }, 500)
        })
        getProductos()
        .then((info) => {
            setItem(info)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [] )
    return (
        <div style={{minHeight: '70vh'}}>
            <ItemDetail item={item} />

        </div>
    );
};
export default ItemDetailContainer;