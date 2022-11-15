import {useState} from 'react';
import './itemCount.css'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const add = () => count < stock && setCount(count + 1)
    const subtract = () => count > 1 && setCount(count - 1)

    const addProductCart = () =>{
        onAdd(count)
      
    } 

    return (
        <>
            <div className='d-flex flex-column contenedor m-3' >
                <div>
                    <button onClick={subtract} className='btn btn-outline-warning mx-3'>-</button>
                    {count}
                    <button onClick={add} className='btn btn-outline-warning mx-3'>+</button>
                </div>   
                <button onClick={addProductCart} className='btn btn-warning m-3'>Agregar al Carrito</button>
            </div>
        </>   
    );
}

export default ItemCount;
