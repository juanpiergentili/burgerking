import React from "react";
import { Link } from "react-router-dom";
import {CartContext} from '../Context/Context';
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ item }) => {
    const { addItem } = React.useContext(CartContext);
    const [counter, setCounter] = React.useState(0);

    const onAdd = (counter) => {
        setCounter(counter);
        addItem(item, counter);
    }

        return (
            <div className="detail bg-light ">
                <div className="row">
                    <div className="col-md-6">
                        <img className="d-flex" height="450rem" src={item.imagen} alt={item.nombre} />
                    </div>
                    <div className="col-md-6 infoDetail">
                        <h2>{item.nombre}</h2>
                        <p className="fs-2 text-center">{item.descripcion}</p>
                        <p className="fs-4 text-center">{item.ingredientes}</p>
                        <h3>${item.precio}</h3>
                        {counter === 0 ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> : <Link to={"/cart"} className="btn fondo_naranja">Ir al Carrito</Link>}
                    </div>
                </div>
            </div>
        );
    };

    export default ItemDetail;