import React from 'react'

const ItemsContainerCard = (props) => {

    return (
        <div className="itemsContainerCard">
            <img src={props.imagen} />
            <div>
                <h4>{props.titulo}</h4>
                <span>{`$${props.precio}`}</span>
            </div>
            <a href="#" className="agregarCarrito">Comprar</a>
        </div>
    )
}

export default ItemsContainerCard
