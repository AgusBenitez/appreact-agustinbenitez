import React from 'react';
import { Link } from 'react-router-dom';

import './StylesCard.css'

const ItemsContainerCard = (props) => {

    if (props.stock !== 0) {
        return (
            <Link to={`/itemdetails/${props.productoId}`} className="itemsContainerCard">
                <div>
                    <img className="itemsContainerCardImg" src={props.imagen} alt="Imágen de producto" />
                    <div >
                        <h4>{props.titulo}</h4>
                        <span>{`$${props.precio}`}</span>
                    </div>
                    <a href="#" className="agregarCarrito">Comprar</a>
                </div>
            </Link>
        )
    } else {
        return (
            <Link to={`/itemdetails/${props.productoId}`} className="itemsContainerCard">
                <div>
                    <img className="itemsContainerCardImg" src={props.imagen} alt="Imágen de producto" />
                    <div>
                        <h4>{props.titulo}</h4>
                        <span>{`$${props.precio}`}</span>
                    </div>
                    <a href="#" className="outStock">Sin stock</a>
                </div>
            </Link>
        )
    }
}

export default ItemsContainerCard
