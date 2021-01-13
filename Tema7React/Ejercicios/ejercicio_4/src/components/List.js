import './List.css';

export default function List({ toDos, setToDos }) {

    const toggleCompleted = (event, index) => {
        if(event.target.id !== "button") {
            const newToDos = [...toDos];
            newToDos[index].completed = !newToDos[index].completed;
            setToDos(newToDos);
        };
    };

    const deleteItem = (mapIndex) => {
        setToDos(prevToDos => prevToDos.filter((toDo, index) =>  index !== mapIndex));
    };

    return (
        <>
            <div className="container">
                <ul className="list-group">
                    {
                    toDos.map((toDo, index) => {

                    /* let style = "default list-group-item";

                    if(toDo.completed) {
                        style += " completed";
                    } */

                    return (
                    <li key={index} className={`default list-group-item ${toDo.completed && "completed"}`} onClick={(event) => toggleCompleted(event, index)}>
                        <span>{index+1}: {toDo.title}</span>
                        <button id="button" className="btn btn-danger"
                            onClick={() => deleteItem(index)}>
                            Delete
                        </button>                        
                    </li>                   
                    )
                    })
                    }
                </ul>
            </div>
        </>        
    )
}
