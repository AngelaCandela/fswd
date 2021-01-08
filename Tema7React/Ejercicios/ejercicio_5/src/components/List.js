import './List.css';

export default function List({ toDos, setToDos }) {

    const changeStyle = (event, index) => {
        if(event.target.id !== "button") {
            const newToDos = [...toDos];
            newToDos[index].completed = !newToDos[index].completed;
            setToDos(newToDos);
        };
    };

    const deleteItem = (event, mapIndex) => {
        setToDos(prevToDos => prevToDos.filter((toDo, index) =>  index !== mapIndex));
    };

    return (
        <>
            <div className="container">
                <ul className="list-group">
                    {
                    toDos.map((toDo, index) => {
                    let style = "default list-group-item";
                    if(toDo.completed === true) {
                        style += " clicked";
                    }
                    return (
                    <li key={index} className={style} onClick={(event) => changeStyle(event, index)}>
                        {index+1}: {toDo.title}
                        <button id="button" className="btn btn-danger"
                            onClick={(event) => deleteItem(event, index)}>
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
