

const FormBuscar = ({busqueda}) => {
    return (
        <form className="d-flex mx-5" role="search">
            <input className="form-control me-sm-2" type="search" placeholder={busqueda} aria-label="Search" />
            <button className="btn btn-secondary" type="submit">Buscar</button>
        </form>
    );
}

export default FormBuscar;
