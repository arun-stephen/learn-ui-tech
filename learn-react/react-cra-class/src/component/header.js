import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <nav className="header">
                <img className="header--logo" src="./images/adidas-logo.png" alt="Adidas Logo"/>
                <h2 className="header-title">Adidas Products</h2>
                <ul className="header--menu">
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                </ul>
            </nav>
        );
    }
}

export default Header;