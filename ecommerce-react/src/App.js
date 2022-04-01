
//estilos
import './Styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//componentes
import Navigate1 from "./Components/NavBar/NavBar2";
import Footer from "./Components/footer/footer";
// rutas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Details from "./Components/pages/detalle";
import {TinyHome} from "./Components/pages/home";
import {Error} from "./Components/pages/Error";
import Carrito from "./Components/pages/Carrito";
import Categorias from './Components/pages/Categorys';
import { Proteinas } from './Components/pages/Proteinas';
import {Creatinas} from "./Components/pages/Creatinas";
function App() {
  return (
  
  <div className="App">    
<BrowserRouter>
      <header>
      < Navigate1/>
     
      </header>  
   
      <Routes>
      <Route path= "/category/:id" element= {<Details />} />
      <Route path='/Productos' element= {<Categorias/>} />
      <Route path='*' element= {<Error/>} />
      <Route path ="/Carrito" element= {<Carrito/>} />
      <Route path = "/Proteinas" element= {<Proteinas/>} />
      <Route path = "/Creatinas" element= {<Creatinas/>} />
      <Route path="/" element= {<TinyHome/>}/> 
     </Routes>
     </BrowserRouter>
      <Footer/>
  
    </div>
  );
}
 
export default App;
