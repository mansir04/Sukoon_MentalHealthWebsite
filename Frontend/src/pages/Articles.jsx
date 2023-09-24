import React, { useState, useEffect } from 'react';
import './MentalIllnessCarousel.css';
import './Anxiety.css';
import { Link } from 'react-router-dom';



const mentalIllnesses = [
  {
    id: 1,
    title: 'Anxiety Disorder',
    description: 'A mental health disorder characterized by excessive worry and fear.',
    image: 'https://www.calmclinic.com/storage/images/213/qoxihx/main/w1600.png' ,
    link: '/anxiety',
  },
{
  id: 2,
  title: 'Depression',
  description: 'A common and serious medical illness that negatively affects how you feel, the way you think and how you act.',
  image: 'https://www.sciencenews.org/wp-content/uploads/2023/02/021123_LS_depression_feat.jpg',
  link: '/depression',

},

{
  id: 3,
  title: 'Obsessive-Compulsive Disorder',
  description: 'A common, chronic, and long-lasting disorder in which a person has uncontrollable, reoccurring thoughts and/or behaviors that he or she feels the urge to repeat over and over.',
  image: 'https://www.gurgaonclinics.com/images/ocd-treat.jpg',
  link: '/ocd',
},

{
  id: 4,
  title: 'Panic Disorder',
  description: 'A sudden episode of intense fear that triggers severe physical reactions when there is no real danger or apparent cause.',
  image: 'https://images.prismic.io/cerebral/42857718-d8da-4e17-8a20-b8d1fdd31158_Panic%20Attacks.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=3420&h=1897',
  link: '/panicdisorder',
},


  // Add more mental illness objects here
];

function Articles() {
  return (
    <div className="carousel">
      {mentalIllnesses.map((illness) => (
        <div className="carousel-item" key={illness.id}>
          <img src={illness.image} alt={illness.title} />
          <h2>{illness.title}</h2>
          <p>{illness.description}</p>
          <Link to={illness.link} className="read-more">Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default Articles;
