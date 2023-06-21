import React, { useState } from "react";

export default function Question() {
    const [isLike, setIsLike] = useState(false);
    const toggleLike = (event) => {
        setIsLike(!isLike);
    }

    return (
        <div className='container'>
            <h3 className='title'>Using State with Boolean</h3>
            <br />
            <h3 className="title">Do you like icecream?</h3>
            <div className='round--container' onClick={toggleLike}>
                <h2>{isLike ? "Yes" : "No"}</h2>
            </div>
        </div>
    );
}