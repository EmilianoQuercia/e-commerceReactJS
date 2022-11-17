import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { queryBdd } from "../../Assets/funtions"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () =>{

    const [product, setProduct] = useState([])
    const {id} = useParams()

   useEffect(()=>{
        queryBdd('../Data/bbdd.json').then(productos => {
            const prod = productos.find(prodBBDD => prodBBDD.id === Number(id))
           setProduct(prod)
        })
   },[id])

    return(
      <div className="containerMain">
        <ItemDetail product={product}/>
      </div>
    )
}

export default ItemDetailContainer