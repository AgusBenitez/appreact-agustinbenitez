import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ItemDetails.css';
import ItemCount from '../Counter/ItemCount';
import ItemDetailsButtons from './ItemDetailsButtons';
import { getFirestore } from "../../firebase";
import Features from './Features';

const ItemDetails = () => {

    const [producto, setProducto] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const productsCollection = db.collection("productos");
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
            <img src={producto.imagen} alt="Imágen del producto" />
            <aside>
                <div className="itemDetailsStart">
                    <h2>{producto.titulo}</h2>
                    <span>Stock disponible: {producto.stock}</span>
                    <p>{`$${producto.precio}`}</p>
                </div>
                <Features
                    rom={producto.rom}
                    ram={producto.ram}
                    display={producto.display}
                    procesador={producto.procesador}
                    camprincipal={producto.camprincipal}
                    camsecundaria={producto.camsecundaria}
                    peso={producto.peso}
                />
                <div className="itemDetailsEnd">
                    <div className="itemDetailsSeleccion">
                        <p>Cantidad:</p>
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
