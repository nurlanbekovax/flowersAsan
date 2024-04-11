import React from "react";
import Medina from "../Assets/medina.jpg";
import Nurshat from "../Assets/nurshat.jpg";
import Amina from "../Assets/amiinaaa.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Our Team</p>
        <h1 className="primary-heading">Who's in</h1>
      </div>
      <div className="testimonial-section-bottom">
        <div className="image-section">
          <div className="imagebox">
            <img src={Medina} alt="" />
            <h1>Medina</h1>
            <h3>Frontend Developer</h3>
          </div>
          <div className="imagebox">
            <img src={Nurshat} alt="" /> 
            <h1>Nurshat</h1>
            <h3>Project Manager</h3>
          </div>
          <div className="imagebox">
            <img src={Amina} alt="" />
            <h1>Amina</h1>
            <h3>Backend Developer</h3>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2></h2>
      </div>
    </div>
    
  );
};



export default Testimonial;