import '../CartWidget/cartWidget.css'
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return ( 
        <Link to='/Cart'>
            <button className='btn btn-secondary'>
                <img className='imgCarrito' src= '../img/carrito-de-compras.png' alt="" />
            </button> 
        </Link>
      
    );
}

export default CartWidget;
