import React from 'react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-copyright">
          &copy; {currentYear} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
