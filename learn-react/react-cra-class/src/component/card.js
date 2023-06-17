import React, { Component } from "react";

class Card extends Component {
    
    render() {
        const {img, name, price} = this.props.item;
        return(
            <div className="card">
                <img className="card--img" src={img} alt={name}/>
                <div className="card--details">
                    <h5 className="card--name">{name}</h5>
                    <h5 className="card--price">${price}</h5>
                </div>
            </div>
        );
    }
}

export default Card;