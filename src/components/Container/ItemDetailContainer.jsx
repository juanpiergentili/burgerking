import React from "react";
import ItemDetail from "../Main/Item/ItemDetail";
import {useParams} from "react-router-dom";
import { getItemId } from "../../utils/customFetch";




const ItemDetailContainer = () =>{

    const [item, setItem] = React.useState({});

    const {id} = useParams();

    React.useEffect(() => {
         getItemId(id).then((detalles) =>{
            setItem(detalles);
        });

        getItemId(id).catch((error) =>{   
            console.log(error);
        });

        }, [id]); 

    return (
        <div className="row">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;