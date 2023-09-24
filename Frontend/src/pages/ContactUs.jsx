import React from 'react';
import './ContactUs.css'; // Import your CSS file for styling
//import 'font-awesome/css/all.css';
import 'font-awesome/css/font-awesome.min.css';


const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <div className="address">
          <div className="icon">
          <a href="https://maps.app.goo.gl/s2nv5jDxxppvi5Z6A" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-map-marker"></i>
          </a> </div>
          <p>
            
            
            Jaypee Institute of Information Technology</p>
        </div>
        <div className="address">
          <div className="icon">
            <i className="fa fa-phone"></i>
          </div>
          <p>+91 xxxxxxxx67</p>
        </div>
        <div className="address">
          <div className="icon">
            <i className="fa fa-envelope"></i>
          </div>
          <p>sukoon@gmail.com</p>
        </div>
        <div className="social-icons">
          <a href="#" className="icon">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" className="icon">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/avid.aesthete/" target="_blank" rel="noopener noreferrer" className="icon">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
