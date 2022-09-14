import React from "react";
import Cupones from "./Cupones";
import Destacado from "./Destacado";
import ItemListContainer from "../Container/ItemListContainer";
import PromoApp from "./PromoApp";
import ItemDetailContainer from "../Container/ItemDetailContainer";

const Main = () => {
    return(
        <div>
            <Destacado />
            <ItemListContainer />
            <ItemDetailContainer />
            <Cupones />
            <PromoApp />
        </div>
    )
}

export default Main;