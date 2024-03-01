import React, { useState } from "react";
import './navbar.css'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="desktopMenu"> 
                <Link activeClass='active' to="home" smooth={true} duration={500} spy={true} offset={-100} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to="workExperience" smooth={true} duration={500} spy={true} offset={-100} className="desktopMenuListItem">Experience</Link>
                <Link activeClass='active' to="proj" smooth={true} duration={500} spy={true} offset={-100} className="desktopMenuListItem">Projects</Link>
                <Link activeClass='active' to="contact" smooth={true} duration={500} spy={true} offset={-100} className="desktopMenuListItem">Contact</Link>
            </div>
            
            {/* FontAwesome Icon for Burger Menu */}
            <FontAwesomeIcon icon={faBars} className="mobMenu" onClick={() => setShowMenu(!showMenu)} />

            <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                <Link activeClass='active' to="home" smooth={true} duration={500} spy={true} offset={-100} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to="workExperience" smooth={true} duration={500} spy={true} offset={-100} className="listItem" onClick={() => setShowMenu(false)}>Experience</Link>
                <Link activeClass='active' to="proj" smooth={true} duration={500} spy={true} offset={-100} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to="contact" smooth={true} duration={500} spy={true} offset={-100} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
