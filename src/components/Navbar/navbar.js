import React, { useState } from "react";
import './navbar.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';
import Testimonials from './../Testimonials/testimonials';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
   return (
   <nav className="navbar">
    <h1 style={{fontSize:'30px'}}>Portfolio</h1>
    <div className="desktopMenu">
     <Link activeClass="active" to="intro" spy={true} offset={-100} smooth={true} duration={500} className="desktopMenuListItem">Home</Link>
     <Link activeClass="active" to="skills" spy={true} offset={-70} smooth={true}  duration={500} className="desktopMenuListItem">About</Link>
     <Link activeClass="active" to="resume" spy={true} offset={-50} smooth={true}  duration={500} className="desktopMenuListItem">Resume</Link>
     <Link activeClass="active" to="works" spy={true} offset={-50} smooth={true}  duration={500} className="desktopMenuListItem">Portfolio</Link>
     <Link activeClass="active" to="testimonials" spy={true} offset={-50} smooth={true}  duration={500} className="desktopMenuListItem">Testimonials</Link>
    </div>
    <button className="desktopMenuBtn " onClick={() => {
    document.getElementById('contact').scrollIntoView({behaviour: 'smooth'});
    }}>
        <img src= {contactImg} alt="ContactImg" className="desktopMenuImg" />Contact Me
    </button>
    <img src={menu} alt="Menu" className="mobMenu" onClick={()=> setShowMenu(!showMenu)}/>
    <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
     <Link activeClass="active" to="intro" spy={true} offset={-100} smooth={true} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Home</Link>
     <Link activeClass="active" to="skills" spy={true} offset={-70} smooth={true}  duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>About</Link>
     <Link activeClass="active" to="resume" spy={true} offset={-50} smooth={true}  duration={500} className="ListItem">Resume</Link>
     <Link activeClass="active" to="works" spy={true} offset={-70} smooth={true}  duration={500} className="ListItem"onClick={()=> setShowMenu(false)}>Portfolio</Link>
     <Link activeClass="active" to="testimonials" spy={true} offset={-50} smooth={true}  duration={500} className="ListItem">Testimonials</Link>
     <Link activeClass="active" to="contact" spy={true} offset={-70} smooth={true}  duration={500} className="ListItem"onClick={()=> setShowMenu(false)}>Contact Me</Link>
    </div>
   </nav>
   )
}

export default Navbar