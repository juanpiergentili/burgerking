import React from "react";
import Cupones from "./Cupones";
import Destacado from "./Destacado";
import ItemListContainer from "./ItemListContainer";
import PromoApp from "./PromoApp";
import ItemCount from "./ItemCount";

const Main = () => {
    return(
        <div>
            <ItemCount stock={4} initial={1} onAdd={0}/>
            <ItemListContainer/>
            <Destacado />
            <Cupones />
            <PromoApp />
        </div>
    )
}

export default Main;