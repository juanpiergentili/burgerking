import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const productos = [
            {"id":1, "nombre":"Doble Cuarto XL", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_DOBLE-CUARTO-XL_1200X800_020822.png", "precio":750},
            {"id":2, "nombre":"Stacker XL Triple", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_STACKER-XL-_1200X800_020822.png", "precio":950},
            {"id":3, "nombre":"Whopper Chimiburga de Carne", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Chimiburga_Carne.png", "precio":700},
            {"id":4, "nombre":"Bacon King Carne", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Bacon-King-Carne.png", "precio":800},
            {"id":5, "nombre":"Doble Napolitano XL", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/DobleNapolitano-XL-1.png", "precio":900},
            {"id":6, "nombre":"WOWcamole de carne", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/WowCamole_carne_300322.png", "precio":850},
            {"id":7, "nombre":"BBQ Bacon XL Doble", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_BBQ-BACON-DOBLE_1200X800_020822.png", "precio":1150},
            {"id":8, "nombre":"Extra Burger XL", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/ExtraBurger-XL.png", "precio":1100},
            {"id":9, "nombre":"Hamburguesa Clasica", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_HAMBURGUESA-CLASICA_1200X800_020822.png", "precio":650}
        ];

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;


