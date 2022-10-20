

const Dropdown = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle seccionesColor" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PRODUCTOS
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Consolas</a></li>
                <li><a className="dropdown-item" href="#">Joystick</a></li>
                <li><a className="dropdown-item" href="#">Juegos</a></li>
            </ul>
        </li>
    );
}

export default Dropdown;
