import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <h1 className="app-heading">Med Cabinet</h1>
            <nav className="nav">
                <Link to="/" className="anchor">Home</Link> | <Link to="/dashboard" className="anchor">Dashboard</Link> | <a href = "https://quizzical-mestorf-7a04b8.netlify.com/index.html" className="anchor">About Us</a>
            </nav>
        </div>
    )
}


export default Header;