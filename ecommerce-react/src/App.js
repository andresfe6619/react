import logo from './logo.svg';
import './Styles/App.scss';
import Bar from "./Components/NavBar"
import Navigate1 from "./Components/NavBar2"
function App() {
  return (
    <div className="App ">   
      <header className="App-header">
      < Navigate1/>
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
     
      </header>  
    
    
    
    
    </div>
  );
}
 
export default App;
