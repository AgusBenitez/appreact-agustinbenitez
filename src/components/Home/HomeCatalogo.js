import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import MiniCard from './MiniCard';

const HomeCatalogo = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const db = getFirestore();
        const lanzamientosCollection = db.collection("lanzamientos");

        setLoading(true);

        lanzamientosCollection
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

    }, [])

    return (
        <Link to="/productos" className="homeContainerCat">
            <h2>Catálogo</h2>
            <div className="homeContainerCatCards">
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
