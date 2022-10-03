import React from "react";

const ItemCount = ({initial, stock, onAdd}) =>{

    const [counter, setCounter] = React.useState(initial);
    const [itemStock, setItemStock] = React.useState(stock);

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
            setItemStock(stock);
        }, [stock]);

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