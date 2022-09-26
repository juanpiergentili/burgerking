import React from "react";
import { useState } from "react";
import {useParams} from "react-router-dom";
import { getItemId } from "../../../utils/customFetch";

const ItemCount = ({initial, stock, onAdd}) =>{

    const [counter, setCounter] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);

    const {id} = useParams();

    const decrementarCantidad = (valor) => {
        if (valor >0){
            setCounter(valor);
        }        
    }

    const incrementarCantidad = (valor) => {
        if (valor <= itemStock){
            setCounter(valor);
        }
    }

    const agregarProductos = () =>{
        if (counter <= itemStock) {
            onAdd(counter); 
            setItemStock(itemStock - counter);
            setCounter(itemStock - counter);
        }   
    }
      
    React.useEffect(() => {

        getItemId(id).then((detalles) =>{   
           setItemStock(detalles.stock);
       });

       /* en caso de que la peticion al servidor salga fallida se ejecutara el metodo catch */
       getItemId(id).catch((error) =>{   
           console.log(error);
       });

        /* los corchetes de la linea siguiente se utilizan a modo de filtro, 
    para evitar que la actualizacion de los estados se ejecute todo el tiempo,
    poniendo los corchetes se ejecuta 1 sola vez al inicio */
        }, [id]); 

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-2">
                    <p>Hamburguesas Burgerking</p>
                    <div className="input-group">
                        <input type="button" className="btn btn-secondary" value="-" onClick={() => {decrementarCantidad(counter - 1)}}/>

                        <input type="text" className="form-control" value={counter} onChange={() =>{}} />
                        <input type="button" className="btn btn-secondary" value="+" onClick={() => {incrementarCantidad(counter + 1)}}/>
                        
                    </div>
                    <div className="d-grid gap-2 py-3">
                        <input type="button" className="btn btn-secondary" value="Agregar" onClick={() => {agregarProductos()}} />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ItemCount;