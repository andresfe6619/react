
//estilos
import './Styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//componentes
import Navigate1 from "./Components/NavBar/NavBar2";
import Footer from "./Components/footer/footer";
// rutas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ListProducts3} from "./Components/pages/Products";
import Details from "./Components/pages/detalle";
import {TinyHome} from "./Components/pages/home";
import {Error} from "./Components/pages/Error";



function App() {
  return (
  
  <div className="App">    
<BrowserRouter>
      <header>
      < Navigate1/>
     
      </header>  
     
      <Routes>
      <Route path="/" element= {<TinyHome/>}/> 
      <Route path= "/Detalle/:id" element= {<Details />} />
      <Route path='/Productos' element= {<ListProducts3/>} />
      <Route path='*' element= {<Error/>} />
    
     </Routes>
     </BrowserRouter>
      <Footer/>
    </div>
  );
}
 
export default App;
