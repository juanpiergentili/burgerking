import React from "react";
import ItemCount from "./ItemCount";
const ItemDetail =({item}) =>{
    return (
     <div className="detail">
        <img src={item.img} alt={item.title} />
        <div className="infoDetail">
            <h2>{item.title}</h2>
            <p>
                Detalle del producto
            </p>
            <h3>${item.price}</h3>
            <ItemCount stock={item.stock} initial={1}/>
        </div>
    </div>
    );
} ;
export default ItemDetail;