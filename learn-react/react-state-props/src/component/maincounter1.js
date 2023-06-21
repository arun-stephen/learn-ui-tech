import { useState } from "react";

export default function MainCounter1() {
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
            <h3 className='title'>Using State with Number</h3>
            <div className="button--container">
                <button className='round--button' onClick={handleSubtract}>-</button>
                <div className='round--container'>
                    <h2>{count}</h2>
                </div>
                <button className='round--button' onClick={handleAdd}>+</button>
            </div>
        </div>
    );
}