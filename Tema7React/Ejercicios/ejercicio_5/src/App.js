import './App.css';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Ejercicio_1 from "./pages/Ejercicio_1";
import Ejercicio_2 from "./pages/Ejercicio_2";
import Ejercicio_3 from "./pages/Ejercicio_3";
import Ejercicio_4 from "./pages/Ejercicio_4";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
            <li><NavLink to="/ej-1">Ejercicio 1</NavLink></li>
            <li><NavLink to="/ej-2">Ejercicio 2</NavLink></li>
            <li><NavLink to="/ej-3">Ejercicio 3</NavLink></li>
            <li><NavLink to="/ej-4">Ejercicio 4</NavLink></li>
        </ul>

        <Route exact path="/ej-1" component={Ejercicio_1}/>
        <Route path="/ej-2" component={Ejercicio_2}/>
        <Route path="/ej-3" component={Ejercicio_3}/>
        <Route path="/ej-4" component={Ejercicio_4}/>
      </BrowserRouter>      
    </div>
  );
}

export default App;