import React from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {useParams} from "react-router-dom";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{
    
    const {id} = useParams();

    const [item, setItem] = React.useState({});

    React.useEffect(() => {

        const db = getFirestore();

        const response = doc(db, "productos", id);

        getDoc(response).then((snapShot) => {
            if (snapShot.exists()) {  
                setItem({id:snapShot.id, ...snapShot.data()}); 
            }
        });
    }, [id]);

    return (
        <div className="row">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;