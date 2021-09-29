import React from 'react';
import { useCart } from '../../context/CartContext';


const CartContainerButtons = () => {

    const { clear } = useCart();

    const vaciarCarrito = () => {
        clear();
    }


    return (
        <div className="cartContainerButtons">
            <a className="cartContainerButtonsFinalizar" href="#">Finalizar compra</a>
            <a onClick={vaciarCarrito} className="cartContainerButtonsVaciar" href="#">Vaciar</a>
        </div>
    )
}

export default CartContainerButtons
