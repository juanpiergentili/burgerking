import React from "react";
import imagen from "../images/slider1.png";

const Destacado = () => {
    return(
        <div>
            <div className="text-center">
                <img src={imagen} alt="" className="img-fluid"/>
            </div>
        </div>
    )
}

export default Destacado;