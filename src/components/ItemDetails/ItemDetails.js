import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ItemDetails.css';
import ItemCount from '../Counter/ItemCount';
import ItemDetailsButtons from './ItemDetailsButtons';

const ItemDetails = () => {

    const [producto, setProducto] = useState({});
    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:3001/productos/${id}`)
            .then((response) => response.json())
            .then((data) => setProducto(data))
            .catch((error) => console.log(error))

    }, [id])

    return (
        <div className='itemDetails'>
            <img src={producto.imagen} />
            <aside>
                <div>
                    <h2>{producto.titulo}</h2>
                    <span>Stock disponible: {producto.stock}</span>
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
                        />
                    </div>
                    <ItemDetailsButtons />
                </div>
            </aside>
        </div >
    )
}



export default ItemDetails
