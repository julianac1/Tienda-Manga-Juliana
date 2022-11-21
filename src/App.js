import NavBar from "./componentes/NavBar";
import CartWidget from "./componentes/CartWidget";
import ItemListContainer from "./componentes/ItemListContainer"; 

const App = ()=> {
  return (

    <div>

    
      <NavBar></NavBar>

      {/* Mensaje de bienvenida en ItemListContainer.jsx */}
      <ItemListContainer 
      texto = 'Bienvenido a la tienda de mangas y figuras de Juliana!'
      ></ItemListContainer>
      

    
    </div>
    
    
  );
}

export default App;
