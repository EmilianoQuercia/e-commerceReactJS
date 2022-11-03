
import './app.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Cart from './Cart/Cart';

import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';


const App = () => {
  return (
        <div className='containerMain'>
            <BrowserRouter>
              <Navbar/>
              
              <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/category/:category' element={<ItemListContainer/>}/>
                <Route path='/Cart' element={<Cart/>}/>
              </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;
