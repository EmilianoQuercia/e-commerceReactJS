import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({product}) =>{

    return(
        <div className="card m-3 mx-auto cardContainer" style={{ width: "18rem" }}>
            <img src={`../img/${product.img}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                 <p className="card-text">Precio ${product.price}</p>
                <p className="card-text">Stock: {product.stock}</p>
                <ItemCount/>
            </div>
         </div>
    );
    
}

export default ItemDetail