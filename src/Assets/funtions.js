import { loadBD, getOnlyProduct } from "./firebase";

// Esta funcion lo que hace es consultar mi base de datos

export const queryBdd = async (route) => {
    const response = await fetch(route);
    const data = await response.json();
    
    return data
}
// getOnlyProduct('59eCAIVsLSiOViZT42xT').then(data=> console.log(data))
//loadBD()

