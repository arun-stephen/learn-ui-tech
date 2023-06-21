import React, { Component } from "react";

export default class Card extends Component {
    render() {
        let message = (this.props.item.sold_out > 0) ? "SOLD OUT" : (this.props.item.online > 0) ? "ONLINE" : "";
        const floatButton = (message === "") ? 
        <></> : 
        <div className="card--float">
            <h4 className="card--float--text">{message}</h4>
        </div>;
        
        return (
            <div className="card">
                <div className="card--img-container">
                    <img className="card--img" src={this.props.item.img} alt={this.props.item.name} />
                    {floatButton}
                </div>
                <h3 className="card--title">{this.props.item.name}</h3>
                <h4 className="card--lang">({this.props.item.language})</h4>
                <div className="card--details">
                    <img className="card--star" src="./img/star.png" alt="stars"/>
                    <h5 className="card--rating">
                        {this.props.item.rating}/{this.props.item.overall_rating}   ({this.props.item.country})
                    </h5>
                </div>
            </div>
        );
    }
}