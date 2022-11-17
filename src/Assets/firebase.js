
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "ecommerce-react-coderhou-9310f.firebaseapp.com",
  projectId: "ecommerce-react-coderhou-9310f",
  storageBucket: "ecommerce-react-coderhou-9310f.appspot.com",
  messagingSenderId: "416258413695",
  appId: "1:416258413695:web:f31456982f9181bd241b4a"
};


const app = initializeApp(firebaseConfig);

const dataBase = getFirestore()

const loadBD = async () =>{
    const promise = await fetch('./Data/bbdd.json')
    const data = await promise.json()

    data.forEach(async (prod) => {
        await addDoc(collection(dataBase, 'productos'),{
            name:prod.name,
            price:prod.price,
            description:prod.description,
            img:prod.img,
            category:prod.category,
            stock:prod.stock
        })
    });
}

const getProduct = async () =>{
    const product = await getDocs(collection(dataBase,'productos'))
    const items = product.docs.map(prod=> {return {...prod.data(), id:prod.id}})
    return items
}
const getOnlyProduct = async () =>{
    const product = await getDoc(collection(dataBase,'productos'))
    const item = product.docs.find(prod=> prod.id === doc.id)
    return item
}

export {loadBD, getProduct, getOnlyProduct}