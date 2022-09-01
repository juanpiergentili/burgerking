import React from "react";

const estilosCarrito = {
    display: "inline-block",
    color: "#555",
    fontsize: "1px",
    fontFamily: "Arial",
    zindex: 100,
    width: "28px"
  };

const Cart = (prop) => {
    return (
        <div className="d-flex text-center">
            <a href=" "><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#555" class="bi bi-cart2" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg></a>
            <span className="border border-3 rounded-circle " id="contador-carrito" style={estilosCarrito}>{prop.cantidad}</span>
        </div>
    )
}

export default Cart;