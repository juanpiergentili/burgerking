import React from "react";
import logo from "../images/burguer.png";
import Cart from "./CartWidget";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div className="d-flex">
            <ul className="nav d-flex align-items-center">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page"  to={"/"} ><img src={logo} width="48" alt="Burguer"/></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link link_header" href="./menu">Pedí tu combo favorito! </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link link_header" href="./menu">Menu</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link link_header"  to={"/category/vegetariana"}>Vegetarianas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link link_header" to={"/category/carne"}>Carne</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link link_header" href="./cupones">Cupones</Link>
                </li>
            </ul>
            <div className="carrito">
                   <Cart cantidad="10" />
                </div>
        </div>
    )
}

export default Navbar;