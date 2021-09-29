import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import SimboloX from '../../assets/img/simbolo-x.svg';
import { useCart } from '../../context/CartContext';

const IconoBorrar = ({ id }) => {

    const { removeItem } = useCart();
    const borrarItem = () => {
        removeItem(id);
    }
    return (
        <a onClick={borrarItem} href="#" className="cartItemBorrar" >
            <img src={SimboloX} />
        </a >
    )
}

export default IconoBorrar
