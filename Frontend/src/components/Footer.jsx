import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Resources</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-copyright">
          &copy; {currentYear} SUKOON. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
