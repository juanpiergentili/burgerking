import React from "react";
import logo from "./images/burguer.png";

const Navbar = () => {
    return(
        <div>
            <ul className="nav d-flex align-items-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="..."><img src={logo} width="48" alt="Burguer"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="...">Pedí tu combo favorito! </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="...">Menu</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="...">Cupones</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;