import logo from './logo.svg';

import './Styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate1 from "./Components/NavBar/NavBar2";
import  ListProducts from "./Components/ListProducts/ProductsReady"
import  Creatins1 from "./Components/ListProducts/itemList"

function App() {
  return (
    <div className="App ">   

      <header >
      < Navigate1/>
       </header>  
      <ListProducts> 
        Proteinas
      </ListProducts> 
      
       <h2 className="blancoNegro">Creatinas</h2>
      <Creatins1>
      </Creatins1>

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
