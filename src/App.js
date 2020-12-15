//import logo from './logo.svg';
import './App.css';

import ButtonAppBar from './components/AppBar'
import ImgMediaCard from './cards/catalogo'

import {
BrowserRouter as 
  Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Apps from './Registro/Apps'
function App() {
  return (
   

      
<Router>
  
<header className="App-header">
 
  <div className="App">

       <ButtonAppBar Link={Link} />
<Switch>

     <Route path="/" exact/>
    <Route path="/catalogo" >
  <ImgMediaCard/>
      </Route> 
    <Route path="/logout"/>
      <Route path="/Login"><Apps/></Route>
      
      
</Switch>
   
   </div>
   </header>
</Router>
   
  );
}




/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AnimationExample/>
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
*/
export default App;
