import React from "react";

const Contact = () => {
  return (
      <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="nrlnbkva70@gmail.com" />
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXDzSVLDxgFltFfQjWtBKvdHqHqzJBjjczkhtPzSKfrkXJJCdZNTMvZPGfmqZNbmSHzMN">
            <button className="secondary-button">Submit</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;