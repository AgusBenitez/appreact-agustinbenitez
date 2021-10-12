import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ItemDetails.css';
import ItemCount from '../Counter/ItemCount';
import ItemDetailsButtons from './ItemDetailsButtons';
import { getFirestore } from "../../firebase";

const ItemDetails = () => {

    const [producto, setProducto] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        setLoading(true);
        // Apuntamos a la base de datos.
        const db = getFirestore();
        // Apuntamos a una colección.
        const productsCollection = db.collection("productos");
        // Apuntamos a un elemento en específico.
        const product = productsCollection.doc(id);

        product
            .get()
            .then((doc) => {
                if (!doc.exists) {
                    console.log("El producto no existe");
                } else {
                    setProducto({ id: doc.id, ...doc.data() });
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [id])

    // useEffect(() => {

    //     fetch(`http://localhost:3001/productos/${id}`)
    //         .then((response) => response.json())
    //         .then((data) => setProducto(data))
    //         .catch((error) => console.log(error))

    // }, [id])

    const sumarCantidad = (e) => {
        e.preventDefault();
        if (cantidad < producto.stock) {
            setCantidad(cantidad + 1);
        } else {
            console.log('LIMITE')
        }
    }

    const restarCantidad = (e) => {
        e.preventDefault();
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    if (loading) {
        return <p className="cargandoText">Cargando...</p>
    } else return (
        <div className='itemDetails'>
            <img src={producto.imagen} />
            <aside>
                <div className="itemDetailsStart">
                    <h2>{producto.titulo}</h2>
                    <span>Stock disponible: {producto.stock}</span>
                    <p>{`$${producto.precio}`}</p>
                </div>
                <div className="itemDetailsEnd">
                    <div className="itemDetailsSeleccion">
                        <div>
                            <span>Color:</span>
                            <select name='color'>
                                <option value='Negro'>Negro</option>
                                <option value='Blanco'>Blanco</option>
                                <option value='Rojo'>Rojo</option>
                            </select>
                        </div>
                        <ItemCount
                            stock={producto.stock}
                            sumarCantidad={sumarCantidad}
                            restarCantidad={restarCantidad}
                            cantidad={cantidad}
                        />
                    </div>
                    <ItemDetailsButtons
                        titulo={producto.titulo}
                        imagen={producto.imagen}
                        precio={producto.precio}
                        cantidad={cantidad}
                        id={producto.id}
                    />
                </div>
            </aside>
        </div >
    )
}



export default ItemDetails
