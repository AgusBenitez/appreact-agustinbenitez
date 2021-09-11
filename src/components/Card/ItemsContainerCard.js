import React from 'react';
import ItemCount from './ItemCount';
import './StylesCard.css'

const ItemsContainerCard = (props) => {

    if (props.stock != 0) {
        return (
            <div className="itemsContainerCard">
                <img src={props.imagen} />
                <div>
                    <h4>{props.titulo}</h4>
                    <span>{`$${props.precio}`}</span>
                </div>
                <ItemCount
                    stock={props.stock}
                />
                <a href="#" className="agregarCarrito">Comprar</a>
            </div>
        )
    } else {
        return (
            <div className="itemsContainerCard">
                <img src={props.imagen} />
                <div>
                    <h4>{props.titulo}</h4>
                    <span>{`$${props.precio}`}</span>
                </div>
                <ItemCount
                    stock={props.stock}
                />
                <a href="#" className="verOtros">Ver otros</a>
            </div>
        )
    }
}

export default ItemsContainerCard
