import './navbar.css'
import Dropdown from "../Dropdown/Dropdown";
import FormBuscar from "../FormBuscar/FormBuscar";
import Secciones from "../Secciones/Secciones";


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-color">
        <div className="container-fluid ">
          <img src="./img/logoGoomba.jpg" alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Secciones/>    
                <Dropdown/>
            </ul>
            <FormBuscar busqueda = 'Buscar Productos'/>
          </div>
          <button className='btn btn-secondary'>
           <img className='imgCarrito' src= './img/carrito-de-compras.png' alt="" />
          </button> 
        </div>
      </nav>
    );
}

export default Navbar;



