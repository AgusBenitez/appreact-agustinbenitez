import React, { useState } from 'react';
import './StylesCount.css';

const ItemCount = (props) => {

    if (props.stock != 0) {
        return (
            <div className="countSection">
                <a className="btnCount" onClick={props.restarCantidad} href="#">-</a>
                <span>{props.cantidad}</span>
                <a className="btnCount" onClick={props.sumarCantidad} href="#">+</a>
            </div>
        )
    } else {
        return (
            <span className="outStock">SIN STOCK</span>
        )
    }
}

export default ItemCount;
