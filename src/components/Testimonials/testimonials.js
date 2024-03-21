import React from 'react';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: '/hearingHope.png',
      name: 'Hearing Hope',
      text: "We collaborated with Aditya to develop our website using Next.js technology. Their end-to-end involvement, from coding to deployment, ensured a seamless project delivery.",
    },
    {
      id: 2,
      image: '/AbhishekSingh.jpeg',
      name: 'Abhishek Kumar Singh',
      text: "Aditya crafted my portfolio, delivering a visually appealing design that's both elegant and user-friendly. Their attention to detail made the entire process effortless.",
    },
    {
      id: 3,
      image: '/GeekRoom.jpg',
      name: 'Geek Room',
      text: "I highly recommend Aditya for any project. His skillful approach and problem-solving abilities were invaluable to our team.",
    },
  ];

  return (
    <div className='testimonial' id='testimonials'>
        <center><h1 style={{marginBottom:'35px', marginTop:'20px'}}>Testimonials</h1></center>
    <div className="testimonials">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-card">
          <img src={testimonial.image} alt={testimonial.name} />
          <p className="testimonial-text">{testimonial.text}</p>
          <p className="testimonial-name">{testimonial.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Testimonials;
