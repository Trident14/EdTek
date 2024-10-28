import React, { useState } from 'react';
import '../styles/NavBar.css';
import EdTek from '../assets/EdTek.svg';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-content">
                <a href="/"><img src={EdTek} alt="Logo" /></a>

                {/* Menu icon for mobile */}
                <span className="menu-icon" onClick={toggleMenu}>
                    ☰
                </span>

                {/* Navigation links */}
                <div className={`nav-part2 ${menuOpen ? 'show' : ''}`}>
                    <a href="#About">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
