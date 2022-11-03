import {useState} from 'react';
import './itemCount.css'

const ItemCount = () => {
    const [count, setCount] = useState(1)

    const modificarContador = (operacion) =>{
        if (operacion === '+'){
            if (count < 10){
                setCount(count + 1)
            }
        }else{
            if (count>1){
                setCount(count - 1)
            }
        }
    }

    const agregarProducto = (count) =>{
        alert('Se agregaron al carrito '+ count + ' productos')
    } 

    return (
        <>
            <div className='d-flex flex-column contenedor m-3' >
                <div>
                    <button onClick={()=>{modificarContador('+')}} className='btn btn-secondary mx-3'>+</button>
                    {count}
                    <button onClick={()=>{modificarContador('-')}} className='btn btn-secondary mx-3'>-</button>
                </div>   
                <button onClick={()=>{agregarProducto(count)}} className='btn btn-secondary m-3'>Agregar al Carrito</button>
            </div>
        </>   
    );
}

export default ItemCount;
