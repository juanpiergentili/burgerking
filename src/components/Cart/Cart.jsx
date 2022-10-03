import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Context";

const Cart = () => {

    const { cart, deleteOne } = React.useContext(CartContext);

    const CartArticle = () => {
        return (cart.map(article => (
            <div key={article.id} className="card rounded-3 mb-4">
                <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                            <img src={article.imagen} className="img-fluid rounded-3" alt={article.cantidad} />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">{article.nombre}</p>
                            <p><span className="text-muted">Categoria: </span>{article.cat}</p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button className="btn btn-link px-2">
                                <i className="fas fa-minus"></i>
                            </button>

                            <input id="form1" min="0" name={article.cantidad} value={article.cantidad} type="number" className="form-control form-control-sm" />

                            <button className="btn btn-link px-2">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">${article.precio}</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <button className="text-danger" onClick={() => deleteOne(article.id)}><i className="fas fa-trash fa-lg"></i></button>
                        </div>
                    </div>
                </div>
            </div>)
        )
        )
    }

    return (
        <section className="container-fluid">
            <div className="row bg-light">
                <div className="h-100" >
                    <div className="container h-100 py-5">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-10">

                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                                    <div>
                                        <p className="mb-0"><span className="text-muted">Ordenar por:</span>
                                            <Link to="/cart" className="text-body">Precio <i className="fas fa-angle-down mt-1"></i></Link>
                                        </p>
                                    </div>
                                </div>

                                {cart.length !== 0 ?

                                    <CartArticle /> :
                                    <div className="card mb-4">
                                        <div className="card-body p-4 d-flex flex-row">
                                            <div className="form-outline flex-fill">
                                                <img src="https://i.postimg.cc/Zq17WGHJ/Carrito-Vacio.png" alt="EmptyCart" className="img-fluid img-empty-cart" />
                                                <Link to="/" className="btn btn-outline-warning btn-lg ms-3">COMPRA ALGO</Link>
                                            </div>
                                        </div>
                                    </div>
                                }

                                <div className="card mb-4">
                                    <div className="card-body p-4 d-flex flex-row">
                                        <div className="form-outline flex-fill">
                                            <input type="text" id="form1" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form1">Codigo de descuento</label>
                                        </div>
                                        <button type="button" className="btn btn-outline-warning btn-lg ms-3">Aplicar</button>
                                    </div>
                                </div>

                                {cart.length !== 0 ?
                                    <div className="card">
                                        <div className="card-body">
                                            <Link to={"/checkout"} className="btn btn-warning btn-block btn-lg">Proceder con el pago</Link>
                                        </div>
                                    </div> :
                                    <div></div>}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Cart;