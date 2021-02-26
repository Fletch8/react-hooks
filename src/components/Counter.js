import { useState, useEffect } from "react";

const Counter =(props) => {

    const [count, setCount] = useState(props.initalNumber);
    const [name, setName] = useState('Fletcher')

    useEffect(() => {
        console.log("hello there...")
    });

    useEffect(() => {
        console.log("bahahaha...")
    },[]);

    return(
        <>
            <h1>{name}'s Counter</h1>
            <p>{count}</p>
            <button onClick={() => {setCount(count + 1)}}>Add</button>
            <button onClick={() => {setCount(count - 1)}}>Subtract</button>
        </>
    )
}

export default Counter;