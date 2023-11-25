import React from "react";
import "./works.css";
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';

const Works = () => {
    return(
        <section id="works">
           <h2 className="worksTitle">My Portfolio</h2>
           <span className="worksDesc">I take pride in paying attention to the smallest details in my projects and make it more efficient.</span>
           <div className="worksImgs">
            <a href="https://weather-app-2d4l.onrender.com" ><img src={Portfolio1} alt="Portfolio-1" className="worksImg" /></a>
            <a href="" ><img src={Portfolio2} alt="Portfolio-2" className="worksImg" /></a>
            <a href="http://geekroom.in/" ><img src={Portfolio3} alt="Portfolio-3" className="worksImg" /></a>
           </div>
           < a href="https://drive.google.com/file/d/1axi0uIgwbexVBexF7gGmq-1EPvbZjeEm/view?usp=sharing"><button className="worksBtn">My Resume</button></a>
        </section>
    )
}

export default Works;
