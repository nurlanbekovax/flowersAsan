import React from 'react';
import Medina from "../../Assets/medina.jpg";
import Nurshat from "../../Assets/nurshat.jpg";
import Amina from "../../Assets/amiinaaa.jpg";
import { AiFillStar } from "react-icons/ai";
import "./Girls.css"

// Wrap your component with React.forwardRef to forward refs
const Testimonial = React.forwardRef((props, ref) => {
  return (
    <div className="work-section-wrapper" ref={ref}> {/* Attached the forwarded ref here */}
      <div className="work-section-top">
        <p className="primary-subheading">Our Team</p>
        <h1 className="primary-heading">Who's in</h1>
      </div>
      <div className="testimonial-section-bottom">
        <div className="image-section">
          <div className="imagebox">
            <img src={Medina} alt="Medina - Frontend Developer" />
            <h1>Medina</h1>
            <h3>Frontend Developer</h3>
          </div>
          <div className="imagebox">
            <img src={Nurshat} alt="Nurshat - Project Manager" /> 
            <h1>Nurshat</h1>
            <h3>Project Manager</h3>
          </div>
          <div className="imagebox">
            <img src={Amina} alt="Amina - Backend Developer" />
            <h1>Amina</h1>
            <h3>Backend Developer</h3>
          </div>
        </div>
        <div className='testimonials-comment-container'>
        <p>
            Good good very good lolololo  VERRY GOOD SHOP BUT NEED BACKEND
        </p>
        </div>
    
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        
      </div>
    </div>
  );
});

export default Testimonial;