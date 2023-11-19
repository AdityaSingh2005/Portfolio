import React, {useRef} from "react";
import "./contact.css";
import InstagramIcon from "../../assets/instagram.png";
import TwitterIcon from "../../assets/twitter.png";
import LinkedinIcon from "../../assets/linkedin.webp";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ztfkazs', 'template_zz4ezun', form.current, 'wAwzIRfQDAee_ATvs5iq9')
            .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!');
             }, (error) => {
              console.log(error.text);
             });
      };
    
    return (
        <section className="contactPage">
             <div id="contact">
               <h1 className="contactPageTitle">Contact Me</h1>
               <span className="contactDesc">Please fill out the form!!</span>

               <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                <input type="email" className="email" placeholder="Your Email" name="your_email" />
                <textarea name="message" rows="5" className="msg" placeholder="Your Message" />

                <button type="submit" value="send" className="submitBtn">Submit</button>


                <div className="links">
                <a href="https://www.twitter.com/2005mister/"> <img src={TwitterIcon} alt="TwitterIcon" className="link" /></a>
                   <a href="https://www.instagram.com/_singh_adiitya/"> <img src={InstagramIcon} alt="InstagramIcon" className="link" /></a>
                   <a href="https://www.linkedin.com/in/aditya-singh-a04721208/"> <img src={LinkedinIcon} alt="LinkedinIcon" className="link" /></a>
                </div>

               </form>

             </div>
        </section>
    )
}

export default Contact;