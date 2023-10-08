import React, { useState } from "react";
import './navbar.css'
import logo from '../assets/engineering.png'
import contactImg from '../assets/contact.png'
import { Link } from 'react-scroll';
import menu from '../assets/burger.png'

const Navbar = () => {
    const [showMenu, setShowMenu] =     useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu"> 
                <Link activeClass= 'active' to="home" smooth={true} duration={500} spy={true} offset={-100} className="desktopMenuListItem">Home</Link>
                <Link activeClass= 'active' to="skills" smooth={true} duration={500} spy={true} offset={-100} className="desktopMenuListItem">About</Link>
                <Link activeClass= 'active' to="workExperience" smooth={true} duration={500} spy={true} offset={-100} className="desktopMenuListItem">Experience</Link>
                <Link activeClass= 'active' to="proj" smooth={true} duration={500} spy={true} offset={-100} className="desktopMenuListItem">Projects</Link>
            </div>
            

            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contactImg} alt="contactImg" className="desktopMenuImg" /> Contact Me
            </button>

            <img src={menu} alt="Menu" className="mobMenu" onClick= { ()=> setShowMenu(!showMenu)}/>
            <div className="navMenu" style = {{display: showMenu ? 'flex' : 'none'}}> 
                <Link activeClass= 'active' to="home" smooth={true} duration={500} spy={true} offset={-100} className="listItem"  on onClick={()=> setShowMenu(false)}>Home</Link>
                <Link activeClass= 'active' to="skills" smooth={true} duration={500} spy={true} offset={-100} className="listItem" on onClick={()=> setShowMenu(false)}>About</Link>
                <Link activeClass= 'active' to="workExperience" smooth={true} duration={500} spy={true} offset={-100} className="listItem" on onClick={()=> setShowMenu(false)}>Experience</Link>
                <Link activeClass= 'active' to="proj" smooth={true} duration={500} spy={true} offset={-100} className="listItem" on onClick={()=> setShowMenu(false)}>Projects</Link>
                <Link activeClass= 'active' to="contact" smooth={true} duration={500} spy={true} offset={-100} className="listItem" on onClick={()=> setShowMenu(false)}>Contact</Link>

            </div>
        </nav>
    )
}

export default Navbar;
