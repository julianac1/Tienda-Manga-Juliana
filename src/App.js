import NavBar from "./componentes/NavBar";
import CartWidget from "./componentes/CartWidget";
import ItemListContainer from "./componentes/ItemListContainer";
import Manga from "./componentes/Manga";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Figure from "./componentes/Figure";

const App = ()=> {
  return (

    <div>

    <BrowserRouter>
    
    <NavBar></NavBar>

    <Routes>
        <Route exact path="/" element={<ItemListContainer/>}></Route>
        <Route path="manga" element={<Manga/>}></Route>
        <Route path="figure" element={<Figure/>}></Route>
    </Routes>

    {/* Mensaje de bienvenida en ItemListContainer.jsx */}
    {/* <div>
    <ItemListContainer 
    texto = 'Bienvenido a la tienda de mangas y figuras de Juliana!'
    ></ItemListContainer>
    </div> */}
    
    </BrowserRouter>



    </div>

    

  

        
    
  );
}

export default App;
