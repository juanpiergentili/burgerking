import React from "react";

import {useParams} from "react-router-dom";

import ItemList from "./ItemList";

import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () =>{

    const {categoryId} = useParams();
    
    const [items, setItems] = React.useState([]);


    React.useEffect(() => {    

        const db = getFirestore();
        
        const productsCollection = collection(db, "productos");

        const queryProducts = categoryId ? query(productsCollection, where("cat", "==", categoryId)) : productsCollection;

        getDocs(queryProducts).then((snapShot) => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
            }
        });

    }, [categoryId]); 
        
        return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;


