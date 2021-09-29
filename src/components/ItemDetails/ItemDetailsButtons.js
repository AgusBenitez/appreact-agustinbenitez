import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetailsButtons = ({ titulo, imagen, precio, cantidad, id }) => {

    const { addItem, cart } = useCart();

    const agregarCarrito = () => {
        addItem(titulo, cantidad, precio, imagen, id);
    }

    return (
        <div className='itemDetailsButtons'>
            <a onClick={agregarCarrito} href='#' className="agregarCarrito">Agregar al carrito</a>
            <Link className="volverBtn" to='/productos'>Volver</Link>
        </div>
    )
}

export default ItemDetailsButtons;
