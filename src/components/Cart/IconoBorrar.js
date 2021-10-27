import React from 'react';
import SimboloX from '../../assets/img/simbolo-x.svg';
import { useCart } from '../../context/CartContext';

const IconoBorrar = ({ id }) => {

    const { removeItem, cart } = useCart();
    const borrarItem = () => {
        removeItem(id);
        console.log(cart);
    }

    return (
        <a onClick={borrarItem} href="#" className="cartItemBorrar" >
            <img src={SimboloX} alt="Icono para borrar un elemento específico del cart" />
        </a >
    )
}

export default IconoBorrar
