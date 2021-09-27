import React from 'react'

const MiniCard = ({ imagen, titulo, precio }) => {
    return (
        <div className="miniCard">
            <img src={imagen} alt="Imagen de producto" />
            <h4>{titulo}</h4>
            <span>{`$${precio}`}</span>
        </div>
    )
}

export default MiniCard
