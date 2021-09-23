import React from 'react';
import carritoImg from './media/tienda-online.png';

const CartWidget = () => {
    return (
        <a className="cartWidget" href="#">
            <img src={carritoImg} alt="Carrito" />
            <span>0</span>
        </a>
    )
}

export default CartWidget
