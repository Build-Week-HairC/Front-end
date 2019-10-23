import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <nav className="nav">
                <a className="anchorFooter" href="#">Home</a> | <a className="anchorFooter" href="#">Dashboard</a> | <a className="anchorFooter" href="#">About Us</a>
            </nav>
            <h5 className="copyright">Copyright Med Cabinet</h5>
        </div>
    )
}


export default Footer;