import React from "react";
import cupon1 from "../images/cupon1.jpeg";
import cupon2 from "../images/cupon2.jpeg";
import cupon3 from "../images/cupon3.jpeg";

const Cupones = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={cupon1} alt="Cupon1" className="img-fluid rounded" />
                </div>
                <div className="col-md-4">
                    <img src={cupon2} alt="Cupon1" className="img-fluid rounded" />
                </div>
                <div className="col-md-4">
                    <img src={cupon3} alt="Cupon1" className="img-fluid rounded" />
                </div>
            </div>
        </div>
    )
}

export default Cupones;