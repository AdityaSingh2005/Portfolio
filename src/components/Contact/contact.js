import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import InstagramIcon from "../../assets/instagram.png";
import TwitterIcon from "../../assets/twitter.png";
import LinkedinIcon from "../../assets/linkedin.webp";
import "./contact.css";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyB8ZxvMOX6xq_RXTZA939HT4yYL7mUiTKs",
  authDomain: "portfolio-f5678.firebaseapp.com",
  projectId: "portfolio-f5678",
  storageBucket: "portfolio-f5678.appspot.com",
  messagingSenderId: "1098604146184",
  appId: "1:1098604146184:web:ee328e3a41f293b8dbabbd",
  measurementId: "G-WB6P79PQX3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Add data to Firestore
      const docRef = await addDoc(collection(db, "contacts"), formData);
      console.log("Document written with ID: ", docRef.id);
      // Clear form fields after successful submission
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setSubmitError(null);
    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmitError("An error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form!!</span>

        <form className="contactForm" onSubmit={handleSubmit}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
          />

          <button type="submit" className="submitBtn" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
          </button>

          {submitError && <p className="error">{submitError}</p>}

          <div className="links">
            <a href="https://www.twitter.com/2005mister/">
              <img src={TwitterIcon} alt="TwitterIcon" className="link" />
            </a>
            <a href="https://www.instagram.com/_singh_adiitya/">
              <img src={InstagramIcon} alt="InstagramIcon" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/aditya-singh-a04721208/">
              <img src={LinkedinIcon} alt="LinkedinIcon" className="link" />
            </a>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Contact;
