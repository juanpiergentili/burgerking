import React from "react";
import { CartContext } from "../Context/Context"
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Success from "../Success/Success";

const styleDetailProduct = { backgroundColor: '#e0e0e0', opacity: '1' }


const Checkout = () => {

    const { cart, clear, cartTotal, cartSuma } = React.useContext(CartContext);

    const  [nombre, setNombre]  = React.useState("");
    const  [apellido, setApellido]  = React.useState("");
    const  [empresa, setEmpresa]  = React.useState("");
    const  [direccion, setDireccion]  = React.useState("");
    const  [email, setEmail]  = React.useState("");
    const  [telefono, setTelefono]  = React.useState("");
    const  [adicionales, setAdicionales]  = React.useState("");

    const [orderId, setOrderId] = React.useState("");


    const sendOrder = () => {
        if ((nombre !== "") && (email !== "") && (telefono !== "")) {
            const buyer = { firstname: nombre, lastname: apellido, company: empresa, address: direccion, email: email, phone: telefono, aditionals: adicionales };
            const items = [];

            cart.forEach((item) => {
                items.push({ id: item.id, tittle: item.nombre, price: item.precio });
            })

            const date = new Date();
            const now = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            const order = { buyer: buyer, items: items, date: now, total: cartSuma() }

            console.log(order);

            const db = getFirestore();
            const orderCollection = collection(db, "orders");
            addDoc(orderCollection, order).then(({ id }) => {
                setOrderId(id);
                clear();
            });
        }
    }


    const ProductoDetail = () => {
        return (cart.map(producto => (
            <div className="row pt-3 px-4" key={producto.id}>
                <div className="col-md-2">
                    <img src={producto.imagen} className="img-fluid" alt={producto.nombre} />
                </div>
                <div className="col-md-3 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0">{producto.nombre}</p>
                </div>
                <div className="col-md-3 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0 small">Cant.: {producto.cantidad}</p>
                </div>
                <div className="col-md-3 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0 small">${(producto.precio) * (producto.cantidad)}</p>
                </div>
                <hr className="mb-4" style={styleDetailProduct} />
            </div>
        )
        ));
    }

    return (
        <div className="container py-2">
            {cartTotal() > 0 ?
                <div className="row mx-3">
                    <div className="col-md-8 mb-4">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Detalles de facturación</h5>
                            </div>
                            <div className="card-body">
                                <form>
                                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" id="form7Example1" className="form-control" onInput={(e) => setNombre(e.target.value)} />
                                                <label className="form-label" htmlFor="form7Example1">Nombre</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" id="form7Example2" className="form-control" onInput={(e) => setApellido(e.target.value)} />
                                                <label className="form-label" htmlFor="form7Example2" >Apellido</label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Text input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="text" id="form7Example3" className="form-control" onInput={(e) => setEmpresa(e.target.value)} />
                                        <label className="form-label" htmlFor="form7Example3" >Empresa</label>
                                    </div>

                                    {/* <!-- Text input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="text" id="form7Example4" className="form-control" onInput={(e) => setDireccion(e.target.value)} />
                                        <label className="form-label" htmlFor="form7Example4" >Dirección</label>
                                    </div>

                                    {/* <!-- Email input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form7Example5" className="form-control" onInput={(e) => setEmail(e.target.value)} />
                                        <label className="form-label" htmlFor="form7Example5" >Email</label>
                                    </div>

                                    {/* <!-- Number input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="number" id="form7Example6" className="form-control" onInput={(e) => setTelefono(e.target.value)} />
                                        <label className="form-label" htmlFor="form7Example6">Teléfono</label>
                                    </div>

                                    {/* <!-- Message input --> */}
                                    <div className="form-outline mb-4">
                                        <textarea className="form-control" id="form7Example7" rows="4" onInput={(e) => setAdicionales(e.target.value)} ></textarea>
                                        <label className="form-label" htmlFor="form7Example7">Información adicional</label>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4 mb-4">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Resumen de compra</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Productos
                                        <span>${cartSuma()}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Envio
                                        <span>Gratis</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Monto Total</strong>
                                            <strong>
                                                <p className="mb-0">(IVA incluido)</p>
                                            </strong>
                                        </div>
                                        <span><strong>${cartSuma()}</strong></span>
                                    </li>
                                </ul>

                                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { sendOrder() }}>
                                    Hacer la compra
                                </button>
                            </div>
                        </div>

                        <div className="card mb-4 pb-3" style={cart.length === 0 ? { display: 'none' } : { display: 'true' }}>
                            <div className="card-header ">
                                <h5 className="mb-0">Detalle de productos</h5>
                            </div>
                            <ProductoDetail />
                        </div>

                    </div>
                </div>
                : orderId !== "" ? <Success id={orderId} /> : <div className="alert alert-danger text-center" role="alert">No se encontraron Productos!</div>}
        </div>
    )
}

export default Checkout;