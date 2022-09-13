import React from "react";
import "./PromoApp.css";
import celular from "../images/landing_page_image-croped-5-1-1.png"

const PromoApp = () => {
    return(
        <div className="container">
            <div className="row">
                 <div className="col-md-6">
                    <img src={celular} alt="Celular" className="celular"/>
                 </div>
                 <div className="col-md-6 row flex-sm-row justify-space-between align-end home-apps__wrap text-primary">
                 <p className="texto">Descargá la APP y disfrutá mucho más por mucho menos</p>
                 <p className="h2">Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU. Y otros países. App Store es una marca de servicio de Apple Inc. Google Play es una marca comercial de Google Inc. Se aplican términos.</p>
                 </div>
            </div>
        </div>
    )
}
export default PromoApp;