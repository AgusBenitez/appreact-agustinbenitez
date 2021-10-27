import React from 'react';
import './FormStyles.css';

const CheckoutContainer = () => {

    const userData = () => {
        console.log('HOLA')
    }

    return (
        <form onSubmit={userData} className='formcheckout'>
            <h3 className='formcheckout-title'>Datos personales:</h3>
            <section>
                <div>
                    <label htmlFor='nombre'>Nombre:</label>
                    <input type='text' id='nombre' name='nombre' />
                </div>
                <div>
                    <label htmlFor='apellido'>Apellido:</label>
                    <input type='text' id='apellido' name='apellido' />
                </div>
                <div>
                    <label htmlFor='email'>Mail:</label>
                    <input type='text' id='email' name='email' />
                </div>
                <div>
                    <label htmlFor='telefono'>Teléfono:</label>
                    <input type='text' id='telefono' name='telefono' />
                </div>
            </section>

            <h3 className='formcheckout-title'>Datos de tarjeta:</h3>
            <section>
                <div>
                    <label htmlFor='numtarjeta'>Número de tarjeta:</label>
                    <input type='text' id='numtarjeta' name='numtarjeta' />
                </div>
                <div>
                    <label htmlFor='titular'>Titular:</label>
                    <input type='text' id='titular' name='titular' />
                </div>
                <div>
                    <label htmlFor='vencimiento'>Vencimiento:</label>
                    <input style={{ width: '4rem' }} type='text' id='vencimiento' name='vencimiento' />
                </div>
                <div>
                    <label htmlFor='codigo'>Código de seguridad</label>
                    <input style={{ width: '3rem' }} type='text' id='codigo' name='codigo' />
                </div>
            </section>

            <h3 className='formcheckout-title'>Datos de envío:</h3>
            <section>
                <div>
                    <label htmlFor='calle'>Calle:</label>
                    <input type='text' id='calle' name='calle' />
                </div>
                <div>
                    <label htmlFor='numero'>Numero:</label>
                    <input type='text' id='numero' name='numero' />
                </div>
                <div>
                    <label htmlFor='provincia'>Provincia:</label>
                    <input type='text' id='provincia' name='provincia' />
                </div>
                <div>
                    <label htmlFor='ciudad'>Ciudad</label>
                    <input type='text' id='ciudad' name='ciudad' />
                </div>
            </section>
            <button>Confirmar compra</button>
        </form>
    )
}

export default CheckoutContainer
