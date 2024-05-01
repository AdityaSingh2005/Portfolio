import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <section className="resumeSection" id='resume'>
      <center> 
        <h1 style={{fontSize: "2.5rem", marginBottom:'25px', marginTop:'15px'}}>My Resume</h1>
      </center>
      <div className="pdfContainer">
        <iframe
          title="Resume PDF"
          src="https://drive.google.com/file/d/1Gnd0_ahWyqD5y_vDNjT4T-tXoNKhqM8m/view?usp=sharing"
          width="100%"
          height="100%" 
          frameborder="0"
          scrolling="no" 
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;
