import React from 'react';
import { Link } from 'react-router-dom';
import carritoImg from './media/tienda-online.png';
import { useCart } from "../../context/CartContext";

const CartWidget = () => {

    const { cart } = useCart();

    const cantidadTotal = () => {
        let quantity = 0;
        cart.forEach(producto => {
            quantity = quantity + producto.quantity;
        })
        return quantity;
    }

    return (
        <Link to="/cart" className="cartWidget" href="#">
            <img src={carritoImg} alt="Carrito" />
            <span>{cantidadTotal()}</span>
        </Link>
    )
}

export default CartWidget;
