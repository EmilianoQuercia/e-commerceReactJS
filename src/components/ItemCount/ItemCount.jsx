import {useState} from 'react';
import './itemCount.css'

const ItemCount = ({stock, on}) => {
    const [count, setCount] = useState(1)

    const add = () => count < stock && setCount(count + 1)
    const subtract = () => count > 1 && setCount(count - 1)

    const addProduct = (count) =>{
        alert('Se agregaron al carrito '+ count + ' productos')
    } 

    return (
        <>
            <div className='d-flex flex-column contenedor m-3' >
                <div>
                    <button onClick={add} className='btn btn-secondary mx-3'>+</button>
                    {count}
                    <button onClick={subtract} className='btn btn-secondary mx-3'>-</button>
                </div>   
                <button onClick={()=>{addProduct(count)}} className='btn btn-secondary m-3'>Agregar al Carrito</button>
            </div>
        </>   
    );
}

export default ItemCount;
