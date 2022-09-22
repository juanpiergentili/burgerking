import React from "react";
import Cupones from "./Cupones";
import Destacado from "./Destacado";
import ItemListContainer from "../Container/ItemListContainer";
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