import './App.css';
import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Ejercicio_1 from "./pages/Ejercicio_1";
import Ejercicio_2 from "./pages/Ejercicio_2";
import Ejercicio_3 from "./pages/Ejercicio_3";
import Ejercicio_4 from "./pages/Ejercicio_4";

export const GlobalContext = createContext({});

function App() {

  //useState ejercicio_3
  const [contacts, setContacts] = useState([
    {name: "John", lastName: "Smith", address: "Calle Compositor Lehmberg Ruiz", province: "Almería", postcode: "04008", phone: "648560349"},
    {name: "Sarah", lastName: "Donovan", address: "Calle Marqués de Larios", province: "Málaga", postcode: "29008", phone: "661284186"},
    {name: "Kate", lastName: "Doe", address: "Calle 2", province: "Madrid", postcode: "29630", phone: "611284133"},
  ]);

  //useState and useEffect ejercicio_4
  const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

  const [toDos, setToDos] = useState([]);  

  useEffect(() => {

    fetch(TODOS_URL)
    .then(response => {
        if(!response.ok)
            throw new Error(response.status);
        
        return response.json();
    })
    .then(data => setToDos(data.slice(0,20)))
    .catch(error => console.log(error))
  }, [])

  return (                
    <BrowserRouter>
      <nav className="navbar bg-dark">
        <ul className="nav">
          <li className="nav-item"><NavLink className="nav-link color-white" activeClassName="color-green" to="/ej-1">Ejercicio 1</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link color-white" activeClassName="color-green" to="/ej-2">Ejercicio 2</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link color-white" activeClassName="color-green" to="/ej-3">Ejercicio 3</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link color-white" activeClassName="color-green" to="/ej-4">Ejercicio 4</NavLink></li>
        </ul>
      </nav>
      
      <GlobalContext.Provider value={{contacts, setContacts, toDos, setToDos}}>
        <Route path="/ej-1" component={Ejercicio_1}/>
        <Route path="/ej-2" component={Ejercicio_2}/>
        <Route path="/ej-3" component={Ejercicio_3}/>
        <Route path="/ej-4" component={Ejercicio_4}/>
      </GlobalContext.Provider>
    </BrowserRouter> 
  );
}

export default App;