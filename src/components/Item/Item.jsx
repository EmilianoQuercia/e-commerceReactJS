import { Link } from "react-router-dom";

const Item = ({prod}) => {
    return (
        <div className="card m-3 cardContainer" style={{ width: "18rem" }} >
        <img src={`../img/${prod.img}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{prod.name}</h5>
          <p className="card-text">Precio ${prod.price}</p>
          <p className="card-text">Stock: {prod.stock}</p>
          <Link to={`/Item/${prod.id}`}><button className="btn btn-secondary btn-dark">Ver Detalle</button></Link>
        </div>
      </div>
    );
}

export default Item;
