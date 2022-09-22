import React from "react";
import { useState } from "react";
import ItemList from "../Main/Item/ItemList";
import {useParams} from "react-router-dom";
import { getItemsList } from "../../utils/customFetch";
import { useEffect } from "react";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {    

        getItemsList(categoryId).then((respuesta) =>{   
                setItems(respuesta);
            });
    
        getItemsList(categoryId).catch((error) =>{   
            console.log(error);
        });
    }, [categoryId]); 
        
        return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;


