import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <nav className="nav">
                <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> | <a href = "https://quizzical-mestorf-7a04b8.netlify.com/index.html">About Us</a>
            </nav>
            <h5 className="copyright">Copyright Med Cabinet</h5>
        </div>
    )
}


export default Footer;