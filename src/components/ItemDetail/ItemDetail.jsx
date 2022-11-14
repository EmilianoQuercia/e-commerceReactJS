import ItemCount from "../ItemCount/ItemCount";
import './itemDetail.css'

const ItemDetail = ({product}) =>{

    return(
        <>
            <div className="card cardDetail">
                <div className="imgDetail">
                    <img src={`../img/${product.img}`} className="card-img-top" alt="..." />
                </div>
                <div className="cardInfo">
                    <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">Precio: ${product.price}</p>
                    <p className="card-text">Stock: {product.stock}</p>
                    <ItemCount stock={product.stock}/>
                </div>
            </div>
            <div className="descDetail">
                <h3>DESCRIPCION</h3>
                <p>{product.description}</p>
            </div>
        </>
    );
    
}

export default ItemDetail