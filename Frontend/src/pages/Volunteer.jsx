import React from 'react';

const founders = [
  {
    name: 'Ananya Shanker',
    role: 'Front-end Team', 
  
    image: 'https://i.pinimg.com/564x/29/77/fe/2977fe836b3ea15ec686d5031006f9ef.jpg', // Replace with actual image file
  },
  {
    name: 'Shaheera Fatima',
    role: 'Front-end Team',
    image: 'https://i.pinimg.com/236x/69/5c/3c/695c3cee049e454e65b9c90c6ae1a29f.jpg', // Replace with actual image file
  },

  {
    name: 'Mansi Rawat',
    role: 'Front-end & Back-end Team',
    image: 'https://i.pinimg.com/236x/43/97/2e/43972ee941de6b988bebbc64741a1b5c.jpg', // Replace with actual image file
  },
  {
    name: 'Aayushi',
    role: 'Front-end & Back-end Team',
    image: 'https://i.pinimg.com/564x/c3/0d/06/c30d0644771cbcb628019836ed319afc.jpg', // Replace with actual image file
  },
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

  