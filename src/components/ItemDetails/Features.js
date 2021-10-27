import React from 'react';
import './ItemDetails.css';

const Features = (props) => {
    return (
        <div>
            <ul className="caracteristicas">
                <li><b>Memoria ROM:</b> {`${props.rom}GB`}</li>
                <li><b>Memoria RAM:</b> {`${props.ram}GB`}</li>
                <li><b>Display:</b> {`${props.display}"`}</li>
                <li><b>Procesador:</b> {props.procesador}</li>
                <li><b>Cámara principal:</b> {props.camprincipal}</li>
                <li><b>Cámara secundaria:</b> {props.camsecundaria}</li>
                <li><b>Peso:</b> {`${props.peso}gr`}</li>
            </ul>
        </div>
    )
}

export default Features
