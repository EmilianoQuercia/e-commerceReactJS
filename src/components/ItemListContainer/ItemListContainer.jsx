
import {queryBdd} from '../../Assets/funtions'
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

  const [product, setProduct] = useState([])
  const {category} = useParams()

  useEffect(() => {
    if (category){
      queryBdd('../Data/bbdd.json').then(product => {
        const productosFiltrados = product.filter(prod => prod.category === Number(category))
        const cardProduct = <ItemList product = {productosFiltrados}/>
        
        setProduct(cardProduct)
      })
    }else{
      queryBdd('./Data/bbdd.json').then(product => {
        const cardProduct = <ItemList product = {product}/>
        setProduct(cardProduct)
      } )
    }
  }, [category]);
  
  return(
    
        <div className="row container-fluid">
            {product}    
        </div>
   
  ) 
   
}

export default ItemListContainer;
