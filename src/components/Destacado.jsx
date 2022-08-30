import React from "react";
import imagen from "./images/slider1.png";

const Destacado = () => {
    return(
        <div className="text-center">
            <img src={imagen} alt="" className="img-fluid"/>
        </div>
    )
}

export default Destacado;