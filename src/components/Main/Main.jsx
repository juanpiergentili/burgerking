import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Cupones from "./Cupones";
import Destacado from "./Destacado";
import PromoApp from "./PromoApp";

const Main = () => {
    return(
        <div>
            <Destacado />
            <ItemListContainer />
            <Cupones />
            <PromoApp />
        </div>
    )
}

export default Main;