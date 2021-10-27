import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


const CartContainerButtons = () => {

    const { clear } = useCart();

    const vaciarCarrito = () => {
        clear();
    }


    return (
        <div className="cartContainerButtons">
            <Link to='/checkout' className="cartContainerButtonsFinalizar">Finalizar compra</Link>
            <a onClick={vaciarCarrito} className="cartContainerButtonsVaciar" href="#">Vaciar</a>
        </div>
    )
}

export default CartContainerButtons
