import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './ItemDetails.css'

const ItemDetails = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch('http://localhost:3001/productos')
                .then(response => response.json())
                .then(data => setData(data[1]))
                .finally(() => setLoading(false));
        }, 2000)
    }, [])

    if (loading) {
        return (
            <p className="cargandoText">Cargando...</p>
        )
    } else {
        return (
            <div className="itemDetails">
                <h2>{data.titulo}</h2>
                <img src={data.imagen} alt="Imagen del producto" />
                <span>{`$${data.precio}`}</span>
            </div >
        )
    }
}

export default ItemDetails
