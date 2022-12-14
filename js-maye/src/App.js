import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './componentes/Header/Header';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { ItemDetailContainer} from './componentes/ItemDetailContainer/ItemDetailContainer';
import { Cart }  from './componentes/cart/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CartProvider } from './context/CartContext';
import Checkout from './componentes/checkout/Checkout';


 
function App() {

  return (
    
   <CartProvider>
  
      <BrowserRouter>

        <Header/> 

        <Routes>
          <Route path= "/" element= {<ItemListContainer/>}/> 
          <Route path= "/items/:categoryId/" element= {<ItemListContainer/>}/> 
          <Route  path= "/producto/:productoId" element= {<ItemDetailContainer/>}/> 
          <Route path= "/cart" element= {<Cart/>}/> 
          <Route path= "/Checkout" element= {<Checkout/>}/> 
        </Routes>   

       </BrowserRouter>
    
    </CartProvider> 
      
     
  );
}

export default App;
