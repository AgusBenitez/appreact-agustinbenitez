import React from 'react';
import ItemsContainerCard from '../Card/ItemsContainerCard';

const ItemsContainer = () => {
    return (
        <div className="itemsContainer">
            <ItemsContainerCard
                imagen="https://tienda.claro.com.ar/wcsstore/Claro/images/catalog/productos/646x1000/70009045.jpg"
                titulo="Samsung Galaxy A72"
                precio={74999}
                stock={12}
            />
            <ItemsContainerCard
                imagen="https://tienda.claro.com.ar/wcsstore/Claro/images/catalog/productos/200x310/70009046.jpg"
                titulo="Samsung Galaxy A52 128GB"
                precio={57999}
                stock={8}
            />
            <ItemsContainerCard
                imagen="https://tienda.claro.com.ar/wcsstore/Claro/images/catalog/productos/200x310/70009054.jpg"
                titulo="Samsung Galaxy A02"
                precio={21999}
                stock={0}
            />
            <ItemsContainerCard
                imagen="https://tienda.claro.com.ar/wcsstore/Claro/images/catalog/productos/200x310/70009233.jpg"
                titulo="Samsung Galaxy A12"
                precio={34999}
                stock={15}
            />
        </div>
    )
}

export default ItemsContainer;
