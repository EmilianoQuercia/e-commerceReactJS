import React from 'react';
import './checkOut.css'
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';

const CheckOut = () => {

    const {clear} = useContext(CartContext)

    const formInput = React.useRef()

    const consultForm = (e) =>{
        e.preventDefault()

        const dateInput = new FormData(formInput.current)
        const valueInput = Object.fromEntries(dateInput)
        console.log(valueInput);
        
        e.target.reset()

    }

    return (
        <div className='d-flex justify-content-center '>
            <form className='formulario' onSubmit={consultForm} ref={formInput}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name='nombre' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-Mail</label>
                    <input type="email" className="form-control" name='email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name='dni' />
                </div>
                <div className="mb-3">
                    <label htmlFor="tel" className="form-label">Telefono</label>
                    <input type="number" className="form-control" name='tel' />
                </div>
                <button type="submit" onClick={clear} className="btn btn-success">Finalizar Compra</button>
            </form>
        </div>
    );
}

export default CheckOut;
