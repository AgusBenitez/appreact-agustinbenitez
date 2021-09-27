import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetailsButtons = () => {
    return (
        <div className='itemDetailsButtons'>
            <Link to="/cart" className="agregarCarrito">Agregar al carrito</Link>
            <a href='#' className='volverBtn'>Volver</a>
        </div>
    )
}

export default ItemDetailsButtons
