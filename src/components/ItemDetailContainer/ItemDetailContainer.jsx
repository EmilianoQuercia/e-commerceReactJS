import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOnlyProduct } from "../../Assets/firebase"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () =>{

    const [product, setProduct] = useState([])
    const {id} = useParams()

   useEffect(()=>{
        getOnlyProduct(id).then(productos => {
            // const prod = productos.find(prodBBDD => prodBBDD.id === Number(id))
           setProduct(productos)
        })
   },[id])

    return(
      <div className="containerMain">
        <ItemDetail product={product}/>
      </div>
    )
}

export default ItemDetailContainer