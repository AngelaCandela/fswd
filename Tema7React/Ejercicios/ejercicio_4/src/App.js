import './App.css';
import { useState, useEffect } from "react";
import List from "./components/List";
import Input from "./components/Input";

function App() {

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
    .catch(error => console.log(error));
    
    return () => {
    }
  }, [])

  return (
    <div className="App">      
      <Input setToDos={setToDos}/>
      <List toDos={toDos} setToDos={setToDos}/>      
    </div>
  );
}

export default App;
