// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} EdTek. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
