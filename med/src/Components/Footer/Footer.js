import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <nav className="nav">
                <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> | <Link>About Us</Link>
            </nav>
            <h5 className="copyright">Copyright Med Cabinet</h5>
        </div>
    )
}


export default Footer;