import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './componentes/Header/Header';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { ItemDetailContainer} from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
 
function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Header/>  
        <Routes>
          <Route path= "/" element= {<ItemListContainer/>}/> 
          <Route path= "/items/:categoryId/" element= {<ItemListContainer/>}/> 
          <Route  path= "/producto/:productoId" element= { <ItemDetailContainer/> }/> 
        </Routes>   
        
       </BrowserRouter>
    </div> 
  );
}

export default App;
