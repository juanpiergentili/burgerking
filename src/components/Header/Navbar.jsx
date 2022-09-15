import React from "react";
import logo from "../images/burguer.png";
import Cart from "./CartWidget";

const Navbar = () => {
    return(
        <div className="d-flex">
            <ul className="nav d-flex align-items-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="./"><img src={logo} width="48" alt="Burguer"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="./menu">Pedí tu combo favorito! </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="./menu">Menu</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="./cupones">Cupones</a>
                </li>
            </ul>
            <div className="carrito">
                   <Cart cantidad="10" />
                </div>
        </div>
    )
}

export default Navbar;