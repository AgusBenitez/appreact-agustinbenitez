import React from 'react';
import IconoBorrar from './IconoBorrar';

const CartItem = ({ titulo, imagen, precio, cantidad, id }) => {

    return (
        <div className="cartItem">
            <h3 className="cartItemTitulo">{titulo}</h3>
            <img className="cartItemImg" src={imagen} alt="Imagen de producto en carrito" />
            <span className="cartItemPrecio">{`Precio unitario: $${precio}`}</span>
            <span className="cartItemCantidad">{`Cantidad: ${cantidad}`}</span>
            <IconoBorrar
                id={id}
            />
        </div>
    )
}

export default CartItem
