import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import ItemsContainerCard from '../Card/ItemsContainerCard';
import "./ItemsContainer.css";

const ItemsContainer = () => {

    const getProductos = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });
    };

    const [items, setItems] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        setCargando(true);
        getProductos()
            .then((result) => setItems(result))
            .finally(() => setCargando(false))
    }, [])

    return (
        <div className="itemsContainer">
            {cargando && <p className="cargandoText">Cargando...</p>}
            {items?.map((producto) => {
                return <ItemsContainerCard key={producto.id}
                    imagen={producto.imagen}
                    titulo={producto.titulo}
                    precio={producto.precio}
                    stock={producto.stock}
                />;
            })}
        </div>
    )
}

export default ItemsContainer;

const productos = [
    {
        id: 0,
        imagen: "https://tienda.claro.com.ar/wcsstore/Claro/images/catalog/productos/646x1000/70009045.jpg",
        titulo: "Samsung Galaxy A72",
        precio: 74999,
        stock: 12
    },
    {
        id: 1,
        imagen: "https://tienda.claro.com.ar/wcsstore/Claro/images/catalog/productos/200x310/70009046.jpg",
        titulo: "Samsung Galaxy A52 128GB",
        precio: 57999,
        stock: 8
    },
    {
        id: 2,
        imagen: "https://tienda.claro.com.ar/wcsstore/Claro/images/catalog/productos/200x310/70009054.jpg",
        titulo: "Samsung Galaxy A02",
        precio: 21999,
        stock: 0
    },
    {
        id: 3,
        imagen: "https://tienda.claro.com.ar/wcsstore/Claro/images/catalog/productos/200x310/70009233.jpg",
        titulo: "Samsung Galaxy A12",
        precio: 34999,
        stock: 15
    }
]
