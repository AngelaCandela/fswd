import './App.css';
import { useState, useEffect } from "react";
import List from "./components/List";
import Input from "./components/Input";

function App() {

  const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

  const [toDos, setToDos] = useState([]);

  const fillList = (data) => {
    data = data.filter(toDo => toDo.id <= 20);
    data.forEach(toDo => {
       setToDos(prevToDos => [...prevToDos, toDo]);
    })    
  };

  useEffect(() => {

    fetch(TODOS_URL)
    .then(response => {
        if(!response.ok)
            throw new Error(response.status);
        
        return response.json();
    })
    .then(data => fillList(data))
    .catch(error => console.log(error))
    
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
