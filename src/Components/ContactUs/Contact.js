import React, { useRef } from 'react';
import "./Contact.css"

const Contact = React.forwardRef((props, ref) => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement what happens when the form is submitted.
    // For instance, opening the user's email client:
    window.location.href = "mailto:nrlnbkva70@gmail.com?subject=Contact Inquiry";
  };

  return (
    <div className="contact-page-wrapper" ref={ref}>
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <form className="contact-form-container" onSubmit={handleSubmit}>
        <input type="email" placeholder="Your email address" />
        <button type="submit" className="secondary-button">Submit</button>
      </form>
    </div>
  );
});

export default Contact;
