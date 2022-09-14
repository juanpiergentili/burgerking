import React from "react";
import ItemDetail from "../Main/Item/ItemDetail";
import { productos } from "../Main/productos";

const ItemDetailContainer = () => {
    const [item, setItem] = React.useState({})

    React.useEffect(() => {
        const getProductos = () =>
        new Promise ((res, rej) =>{
            const product = productos.find((prod) => prod.id === 1)
            setTimeout(()=>{
                res(product)
            }, 500)
        })
        getProductos()
        .then((info) => {
            setItem(info);
            console.log(info)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [] );
    return (
        <div style={{minHeight: '70vh'}}>
            <ItemDetail item={item} />
        </div>
    );
};
export default ItemDetailContainer;