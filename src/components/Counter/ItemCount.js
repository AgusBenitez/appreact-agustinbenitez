import React, { useState } from 'react';
import './StylesCount.css';

const ItemCount = (props) => {

    const [cantidad, setCantidad] = useState(1);

    function sumarCantidad(e) {
        e.preventDefault();
        if (cantidad < props.stock) {
            setCantidad(cantidad + 1);
        } else {
            console.log('LIMITE')
        }
    }

    function restarCantidad(e) {
        e.preventDefault();
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    if (props.stock != 0) {
        return (
            <div className="countSection">
                <a className="btnCount" onClick={restarCantidad} href="#">-</a>
                <span>{cantidad}</span>
                <a className="btnCount" onClick={sumarCantidad} href="#">+</a>
            </div>
        )
    } else {
        return (
            <span className="outStock">SIN STOCK</span>
        )
    }
}

export default ItemCount;
