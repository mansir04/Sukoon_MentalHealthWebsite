import React from 'react';
import MentalHealthInitiative from './MentalHealthInitiative';
import '../App.css'; 

const initiatives = [
  {
    text: "[italic]The Government of India[\italic] launched the National Mental Health Programme (NMHP) to deal with the the absolute inadequacy of mental health care infrastructure in the country.",
    image: "https://cdn.pixabay.com/photo/2022/10/18/11/02/mood-7529903_640.png",
    link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1043&lid=359",

  },
  {
    text: "[italic]MINDS Foundation[\italic] aims to destigmatize mental health and provide access to high-quality and cost-effective mental health care",
    image: "https://cdn.pixabay.com/photo/2022/10/18/11/02/woman-7529904_640.png",
    link: "https://www.mindsfoundation.org/",    
  },
  {
    text: "[italic]Sangath[\italic] focuses on mental health development and child, adolescent, and youth development",
    image: "https://cdn.pixabay.com/photo/2022/08/17/20/00/psychotherapy-7393379_640.png",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7114045/",
  },
  {
    text: "[italic]Manas Foundation[\italic] aims to create mental health awareness and support gender justice by engaging with public transport services on women’s safety. ",
    image: "https://cdn.pixabay.com/photo/2022/10/18/11/02/mood-7529905_1280.png",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7114045/",
  },  {
    text: "[italic]Anjali Mental Health Rights Organization[\italic] is working toward making mental health communities inclusive and intersectional.",
    image: "https://cdn.pixabay.com/photo/2022/08/19/17/51/brain-7397412_1280.png",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7114045/",
  },
  {
    text: "[italic]The Banyan[\italic] provides housing, mental health care, and the opportunity to reconnect with the world and their families to homeless people living with mental health conditions.",
    image: "https://cdn.pixabay.com/photo/2018/04/25/22/49/cranium-3350798_640.png",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7114045/",
  },
];
const backgroundColors = [
  'skyblue',
  'lightcyan',
  '#ffc09f',
  'lightblue',
  'lightgreen',
  '#ffee93'
];

const Initiatives = () => {
  return (
    <div className="initiatives-container" style={{ width: '100%' }}>
      <h1>Mental Health Initiatives in India</h1>
      {initiatives.map((initiative, index) => (
        <MentalHealthInitiative
          key={index}
          text={initiative.text}
          image={initiative.image}
          link={initiative.link}
          isTextOnLeft={index % 2 === 0} 
          backgroundColor={backgroundColors[index % backgroundColors.length]}
        />
      ))}
    </div>
  );
};

export default Initiatives;
