import { useState } from 'react';

function Counter() {

    // const count = array[0];
    // const setCount = array[1];
    // Desestructuración
    const [count, setCount] = useState(10);

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className="container row justify-content-center align-items-center mt-5">
            <button onClick={decrement} className="btn btn-success ml-3">-</button>
            <span> {count}</span>
            <button onClick={() => {setCount(count + 1)}} className="btn btnsuccess ml-3">+</button> 
        </div>
    )
}

export default Counter;