import React from "react";

export default function Star(props) {
    const starImage = (props.isFilled) ? "./full_star.png" : "./empty_star.png";

    return (
        <div>
            <img className="card--star" src={starImage} onClick={props.handleClick} alt="star"/>
        </div>
    );
}