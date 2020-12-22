import { useState, useEffect} from "react";
import './App.css';
import Post from "./components/Post"

/* function App() {
  return (
    <div className="App">
      <Post title="Card title" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tenetur officiis ullam aliquam quibusdam quo ad adipisci qui molestiae placeat!" btntxt="Click me!"/>
      <Post paragraph="This time I haven't used Lorem Ipsum!" btntxt="Click me please!"/>
    </div>
  );
} */

function Card(props) {
  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="img"/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.paragraph}</p>
        <button className="btn btn-primary">{props.btntxt}</button>
      </div>
    </div>
  );
}

function PrimerComponente() {
  const personas = [
    {nombre: "Antonio", apellidos: "López Muñoz"},
    {nombre: "Agustín", apellidos: "Altamira Ramírez"}
  ];
  return (
    personas.map(persona => {
      return (
        <div>
          <ul>
            <li key={persona.nombre}>{persona.nombre}</li>
            <li key={persona.apellidos}>{persona.apellidos}</li>
          </ul>
        </div>
      )
    })
  )
}

/* function App() {

  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Has hecho click {count} veces`
  }, [count])

  return (
    <div className="container">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Example />}

      <p>Has hecho click {count} veces.</p>
      <button onClick={() => setCount(count => count + 1)}>Click</button>
    </div>
  );
}

function Example() {

  useEffect(() => {
    console.log("Me renderizo"); // Todo lo que está antes del return
                                  //se ejecuta en cuanto el componente aparezca (se renderize)
    return () => {
      console.log("Me desmonto"); // Todo lo que está antes del return
                                  // se ejecuta en cuanto el componente desaparezca
    }
  })
  return (
    <div>
      Soy un componente que desaparece.
    </div>
  );
} */
import { BrowserRouter, Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <ul>
          <li><Navlink to="/">Home</Navlink></li>
          <li><Navlink to="/about">About</Navlink></li>
        </ul>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </BrowserRouter>
    </div>
  );
}

export default App;