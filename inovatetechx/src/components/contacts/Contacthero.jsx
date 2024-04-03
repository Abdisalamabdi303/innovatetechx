import React from 'react';
import './Contacthero.css';
import { Link } from 'react-router-dom';

function ContactHero() {
    return (
        <div className='contacthero'>
        <header className="header-contact">
            <img src='logo.png' alt="Innovate Tech Logo" className="header-logo-contact" />
            <nav className="header-nav-contact">
                <Link to="/" className="nav-link-contact ">Home</Link>
                <Link to="/about" className="nav-link-contact">About</Link>
                <Link to="/contact" className="nav-link-contact active">Contact</Link>
            </nav>
            <div className="header-buttons-contact">
                <button className="button login-button">Login</button>
                <button className="button signup-button">Sign Up</button>
            </div>
        </header>
        </div>
    );
}

export default ContactHero;
