import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import ItemsContainerCard from '../Card/ItemsContainerCard';
import "./ItemsContainer.css";
import { getFirestore } from "../../firebase/index.js";

const ItemsContainer = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const db = getFirestore();
        const productsCollection = db.collection("productos");

        setLoading(true);

        productsCollection
            .get()
            .then((querySnapshot) => {
                console.log(querySnapshot);
                if (querySnapshot.empty) {
                    console.log("No hay productos");
                } else {
                    setData(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                }
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));



        // fetch("http://localhost:3001/productos")
        //     .then((Response) => {
        //         if (Response.ok) {
        //             return Response.json();
        //         } else {
        //             throw Response;
        //         }
        //     })
        //     .then((data) => setData(data))
        //     .catch((error) => setError(error))

        //     .finally(() => setLoading(false));
    }, [])

    return (
        <div className="itemsContainer">
            {loading && <p className="cargandoText">Cargando...</p>}
            {error && (
                <p>Hubo un error: {error.status} {error.statusText}</p>
            )}
            {data?.map((producto) => {
                return <ItemsContainerCard
                    key={producto.id}
                    productoId={producto.id}
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


