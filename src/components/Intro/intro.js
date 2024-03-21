import React from "react";
import "./intro.css"
import bg from "../../assets/image.png";
import btnimg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
              <span className="hello">Hello,</span>
              <span className="introText">I'm <span className="introName">Aditya Singh</span><br/>Computer Science Student</span>
              <Link to="resume" spy={true} offset={-50} smooth={true}  duration={500}><button className="btn"><img src={btnimg} className="btnImg" alt="hire me"/>Hire Me</button></Link>
            </div>
             <img src={bg} alt="profile" className="bg" />
        </section>
    )
}

export default Intro;