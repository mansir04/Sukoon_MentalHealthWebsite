// AboutUs.js

import React from 'react';
import './Volunteer.css';

const founders = [
  {
    name: 'Ananya Shanker',
    role: 'Founder & CEO',
    image: './20230308_154612~2 (1).jpg', // Replace with actual image file
  },
  {
    name: 'Shaheera Fatima',
    role: 'Founder & CEO',
    image: 'jane-smith.jpg', // Replace with actual image file
  },

  {
    name: 'Mansi Rawat',
    role: 'Founder & CEO',
    image: 'jane-smith.jpg', // Replace with actual image file
  },
  {
    name: 'Aayushi',
    role: 'Founder & CEO',
    image: 'jane-smith.jpg', // Replace with actual image file
  },


  // Add more founding members as needed
];

const Volunteer = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="founders">
        {founders.map((founder, index) => (
          <div key={index} className="founder">
            <div className="founder-image">
              <img src={founder.image} alt={founder.name} />
            </div>
            <div className="founder-details">
              <h3>{founder.name}</h3>
              <p>{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;

  