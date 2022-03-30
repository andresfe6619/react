
//estilos
import './Styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//componentes
import Navigate1 from "./Components/NavBar/NavBar2";
import  Creatins1 from "./Components/ListProducts/itemList"
import { ProteinDetails } from './Components/ListProducts/itemDetailContainer';
// rutas
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {ListProducts3} from "./Components/ListProducts/home";

function App() {
  return (
  
  <div className="App">   
<BrowserRouter>

      <header>
      < Navigate1/>
       </header>  
      <Routes>
      <Route path="/" element= {<ListProducts3/>} /> 
     
      
       {/* <h2 className="blancoNegro">Creatinas</h2>
      <Creatins1 className="Productos">
      </Creatins1>
      <h2 className="blancoNegro">Proteina Whey</h2>
      <ProteinDetails></ProteinDetails> */}
     </Routes>
     </BrowserRouter>
   
    </div>
  );
}
 
export default App;
