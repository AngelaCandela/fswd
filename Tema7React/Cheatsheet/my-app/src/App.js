import './App.css';
import Post from "./components/Post"

function App() {
  return (
    <div className="App">
      <Post title="Card title" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tenetur officiis ullam aliquam quibusdam quo ad adipisci qui molestiae placeat!" btntxt="Click me!"/>
      <Post paragraph="This time I haven't used Lorem Ipsum!" btntxt="Click me please!"/>
    </div>
  );
}

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

export default App;
