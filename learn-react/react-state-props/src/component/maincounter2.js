import { useState } from "react";
import Counter from "./counter";

export default function MainCounter2() {
    const [count, setCount] = useState(0);

    const handleSubtract = (event) => {
        //style-1
        //setCount(count-1); //directly updating the state
        //style-2
        //setCount(count => count-1); //directly updating the state
        //style-3
        setCount(prevCount => prevCount-1);
    }

    const handleAdd = (event) => {
        //style-1
        //setCount(count+1); //directly updating the state
        //style-2
        //setCount(count => count+1); //directly updating the state
        //style-3
        setCount(prevCount => prevCount+1);
    }
    return (
        <div className='container'>
            <h3 className='title'>Using State and Props</h3>
            <div className="button--container">
                <button className='round--button' onClick={handleSubtract}>-</button>
                <Counter count={count} />
                <button className='round--button' onClick={handleAdd}>+</button>
            </div>
        </div>
    );
}