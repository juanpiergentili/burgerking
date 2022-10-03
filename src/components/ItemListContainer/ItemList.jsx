import React from "react";
import {Link} from "react-router-dom";
import Item from './Item'

const ItemList = ({items}) => {
    return (
        <div className="row">
            {items.map(prod => (
                <Link key={prod.id} to={"/item/"+prod.id} className="col-md-4 py-3">
                    <Item nombre={prod.nombre} imagen={prod.imagen} precio={prod.precio} />
                </Link>)
            )}
        </div>
    )
}


export default ItemList;