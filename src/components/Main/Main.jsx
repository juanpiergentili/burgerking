import React from "react";
import Cupones from "./Cupones";
import Destacado from "./Destacado";
import ListaBurgers from "./ItemListContainer";
import PromoApp from "./PromoApp";

const Main = () => {
    return(
        <div>
            <ListaBurgers />
            <Destacado />
            <Cupones />
            <PromoApp />
        </div>
    )
}

export default Main;