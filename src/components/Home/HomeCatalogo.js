import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MiniCard from './MiniCard';

const HomeCatalogo = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/lanzamientos")
            .then((Response) => Response.json())
            .then((data) => setData(data))
    }, [])

    return (
        <Link to="/productos" className="homeContainerCat">
            <h2>Catálogo</h2>
            <div className="prueba">
                {data?.map(lanzamiento => {
                    return (
                        <MiniCard
                            imagen={lanzamiento.imagen}
                            titulo={lanzamiento.title}
                            precio={lanzamiento.precio}
                        />
                    )
                })}
            </div>
        </Link>
    )
}

export default HomeCatalogo
