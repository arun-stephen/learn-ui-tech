import React from "react";

export default function Counter(props) {
    return(
        <div className='round--container'>
            <h2>{props.count}</h2>
        </div>
    );
}