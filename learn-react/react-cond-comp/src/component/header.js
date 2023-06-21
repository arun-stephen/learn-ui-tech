import React, { Component } from 'react';

export default class Header extends Component {

    render() {
        return(
            <nav className='header'>
                <img className='header--image' src="./logo.png" alt='logo image'/>
                <h3 className='header--title'>Movies Review</h3>
                <ul className='header--menu'>
                    <li>About</li>
                    <li>Home</li>
                    <li>Gallery</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        );
    }
}