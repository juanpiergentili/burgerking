import React from "react";
import Cupones from "./Cupones";
import Destacado from "./Destacado";
import ItemListContainer from "../Container/ItemListContainer";
import PromoApp from "./PromoApp";
import ItemCount from "../Main/Item/ItemCount";

const Main = () => {
    return(
        <div>
            <Destacado />
            <ItemListContainer/>
            <ItemCount stock={4} initial={1} onAdd={0}/>
            <Cupones />
            <PromoApp />
        </div>
    )
}

export default Main;