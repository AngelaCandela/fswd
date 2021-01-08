import { useState } from "react";

export default function Input({ setToDos }) {

    const [input, setInput] = useState("");

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const addToDo = (event) => {
        event.preventDefault();

        const newToDo = {
            userId: 1,
            title: input,
            completed: false,
        };

        setToDos(prevToDos => [newToDo, ...prevToDos]);

        setInput("");
    }
    return (
        <>
            <div className="container w-50">
            	<h1 className="my-4">Todo List</h1>
            	<form className="form-group" onSubmit={addToDo}>
            	    <input type="text" className="form-control mb-3" placeholder="Add a new item to the list" value={input} onChange={handleInput}/>
            	</form>
            </div>
        </>
    )
}
