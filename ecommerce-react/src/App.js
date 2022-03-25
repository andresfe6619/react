
//estilos
import './Styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//componentes
import Navigate1 from "./Components/NavBar/NavBar2";
import  ListProducts from "./Components/ListProducts/ProductsReady"
import  Creatins1 from "./Components/ListProducts/itemList"
import { ProteinDetails } from './Components/ListProducts/itemDetailContainer';

function App() {
  return (
    <div className="App">   

      <header >
      < Navigate1/>
       </header>  
      <ListProducts> 
        Proteinas
      </ListProducts> 
      
       <h2 className="blancoNegro">Creatinas</h2>
      <Creatins1 className="Productos">
      </Creatins1>
      <ProteinDetails></ProteinDetails>
     
    
    </div>
  );
}
 
export default App;
