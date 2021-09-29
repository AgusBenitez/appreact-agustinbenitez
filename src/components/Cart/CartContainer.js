import React, { useEffect, useState } from 'react'
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import './Cart.css';
import CartContainerButtons from './CartContainerButtons';
import { Link } from 'react-router-dom';

const CartContainer = () => {

    const { cart } = useCart();

    if (cart.length != 0) {
        return (
            <div className="cartContainer">
                <h2>Tus productos:</h2>
                {cart?.map(producto => {
                    return (
                        <div className="cartContainerProductos">
                            <CartItem
                                titulo={producto.item}
                                imagen={producto.image}
                                precio={producto.price}
                                cantidad={producto.quantity}
                                id={producto.id}
                            />
                        </div>
                    )
                })}
                <CartContainerButtons />
            </div>
        )
    } else {
        return (
            <div className="cartContainerVacio">
                <h2> Aún no hay productos en tu carrito</h2>
                <div className="cartContainerVacioButtons">
                    <Link className="cartContainerVacioButtonsHome" to='/'>Home</Link>
                    <Link className="cartContainerVacioButtonsProductos" to='/productos'>Productos</Link>
                </div>
            </div>
        )
    }

}

export default CartContainer;
