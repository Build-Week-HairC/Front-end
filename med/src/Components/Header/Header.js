import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="app-heading">Med Cabinet</h1>
            <nav className="nav">
                <a className="anchor" href="#">Home</a> | <a className="anchor" href="#">Dashboard</a> | <a className="anchor" href="#">About Us</a>
            </nav>
        </div>
    )
}


export default Header;