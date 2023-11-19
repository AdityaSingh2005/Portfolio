import React from "react";
import "./skills.css";
import UIDesign from '../../assets/website-design.png';
import WebDesign from '../../assets/web-design2.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">Experienced MERN stack developer and DevOps enthusiast, dedicated to transforming ideas into powerful applications. I thrive in collaborative environments, leveraging my skills to contribute to team success.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UI/UX Design" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Full Stack Web Developer</h2>
                        <p> Experienced in a wide range of programming languages and frameworks, committed to delivering innovative solutions that meet client needs.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="Web Design" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>
Passionate web designer skilled in blending aesthetics and functionality to create visually appealing, user-friendly websites.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="App Design" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>DevOps</h2>
                        <p>Committed to enhancing collaboration between development and operations teams to achieve efficient and reliable continuous integration and delivery.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;