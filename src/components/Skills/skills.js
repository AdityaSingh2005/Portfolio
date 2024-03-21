import React from "react";
import "./skills.css";
import UIDesign from '../../assets/website-design.png';
import Backend from '../../assets/backend.png';
import Ai from '../../assets/Ai.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <p className="skillDesc"> I'm Aditya, a <span style={{color:'#40E0D0'}}>2nd Year Computer Science student</span> with a fervor for technology and a knack for building innovative solutions. Proficient in MERN Stack, Git, and GitHub. I have hands-on experience with backend services, including AI Engineering and <span style={{color:"#40E0D0"}}>Firebase.</span> My passion lies in constructing complex web applications that push the boundaries of what's possible.</p>
            <br/>
            <span className="skillDesc">Experienced <span style={{color:'#40E0D0'}}>MERN stack developer</span> and <span style={{color:'#40E0D0'}}>AI enthusiast</span>, dedicated to transforming ideas into powerful applications. I thrive in collaborative environments, leveraging my skills to contribute to team success.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UI/UX Design" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Full Stack Web Developer</h2>
                        <p> Experienced in a wide range of programming languages and frameworks, committed to delivering innovative solutions that meet client needs.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Backend} alt="Web Design" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Backend Developer</h2>
                        <p>Skilled in server-side programming, database management, and API integration, proficiently crafting efficient, scalable solutions to power web applications and software systems with reliability and security.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Ai} alt="App Design" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>AI Engineer</h2>
                        <p>Committed to enhancing collaboration between development and operations teams to achieve efficient and reliable continuous integration and delivery.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;