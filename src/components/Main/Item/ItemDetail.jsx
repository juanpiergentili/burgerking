import React from "react";
import ItemCount from "../Item/ItemCount";

const ItemDetail = ({ item }) => {

    return (
        <div className="detail bg-light ">
            <div className="row">
                <div className="col-md-6">
                    <img className="d-flex" height="450rem" src={item.imagen} alt={item.title} />
                </div>
                <div className="col-md-6 infoDetail">
                        <h2>{item.nombre}</h2>
                        <p className="fs-2 text-center">{item.descripcion}</p>
                        <p className="fs-4 text-center">{item.ingredientes}</p>
                        <h3>${item.precio}</h3>
                        <ItemCount stock={item.stock} initial={1} onAdd={0} />
                </div>    
            </div>
        </div>
    );
} ;
export default ItemDetail;