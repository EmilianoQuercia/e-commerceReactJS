
import './app.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { CartContextProvider } from '../Context/CartContext';

import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';



const App = () => {
  return (
    <div className='containerMain'>

              <BrowserRouter>
                <CartContextProvider>
                  <Navbar/>
                  <Routes>
                    <Route path='/' element={<ItemListContainer/>} />
                    <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
                    <Route path='/category/:category' element={<ItemListContainer/>}/>
                    <Route path='/Cart' element={<Cart/>}/>
                  </Routes>
                </CartContextProvider>
              </BrowserRouter>
        </div>
  );
}

export default App;
