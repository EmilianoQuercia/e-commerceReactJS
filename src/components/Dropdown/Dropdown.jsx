import { Link } from "react-router-dom";

const Dropdown = () => {
    return (
        <li className="nav-item dropdown">
            <li className="nav-link dropdown-toggle seccionesColor" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PRODUCTOS
            </li>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to='/category/1'>Consolas</Link></li>
                <li><Link className="dropdown-item" to='/category/2'>Joystick</Link></li>
                <li><Link className="dropdown-item" to='/category/3'>Juegos</Link></li>
                <li><Link className="dropdown-item" to='/category/4'>Accesorios</Link></li>
            </ul>
        </li>
    );
}

export default Dropdown;
