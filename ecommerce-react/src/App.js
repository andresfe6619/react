import logo from './logo.svg';

import './Styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate1 from "./Components/NavBar/NavBar2";
import  ListProducts from "./Components/ListProducts/ProductsReady"
function App() {
  return (
    <div className="App ">   

      <header >
      < Navigate1/>
       </header>  
      <ListProducts> 
        Proteinas
      </ListProducts> 
      <ListProducts> 
        Mancuernas
      </ListProducts> 


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
     
     
    
    
    
    
    </div>
  );
}
 
export default App;
