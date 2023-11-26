import React from 'react';
import MentalHealthInitiative from './MentalHealthInitiative';

const initiatives = [
  {
    text: "[italic]National Mental Health Programme (NMHP)[\italic]Launched by the Government of India to deal with the the absolute inadequacy of mental health care infrastructure in the country. It aims to ensure the availability and accessibility of minimum mental health care for all in the near foreseeable future, particularly to the most vulnerable sections of the population.",
    image: "https://cdn.pixabay.com/photo/2022/10/18/11/02/mood-7529903_640.png",
    link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1043&lid=359",

  },
  {
    text: "[italic]MINDS Foundation[\italic]Aims to destigmatize mental health and provide access to high-quality and cost-effective mental health care. It is achieving this goal by providing education and making mental health care accessible. By undertaking continuous research, the Foundation is also creating effective intervention programs.",
    image: "https://cdn.pixabay.com/photo/2022/10/18/11/02/woman-7529904_640.png",
    link: "https://www.mindsfoundation.org/",    
  },
  {
    text: "[italic]Sangath[\italic]Focuses on mental health development and child, adolescent, and youth development. With several initiatives to design effective treatment plans, Sangath aims to create solutions to improve mental health across all ages and people. It has also collaborated with various government services and departments to develop a broader impact. ",
    image: "https://cdn.pixabay.com/photo/2022/08/17/20/00/psychotherapy-7393379_640.png",
    link: "https://sangath.in/",
  },
  {
    text: "[italic]The Banyan[\italic]Provides housing, mental health care, and the opportunity to reconnect with the world and their families to homeless people living with mental health conditions. Under its NALAM program, it offers free mental health services. The organization has also initiated three Master’s degree programs collaborating with the Tata Institute of Social Sciences.",
    image: "https://cdn.pixabay.com/photo/2022/10/18/11/02/mood-7529905_1280.png",
    link: "https://thebanyan.org/",
  },  {
    text: "[italic]Time to Change[\italic]Based in the UK and its focus is to end mental health discrimination with people who have successfully championed their way through mental illness and want to help others. Also, they assist workplaces to encourage support of their employees and schools so that students may understand mental health better.",
    image: "https://cdn.pixabay.com/photo/2022/08/19/17/51/brain-7397412_1280.png",
    link: "https://www.time-to-change.org.uk/",
  },
  {
    text: "[italic]The Black Dog Institute [\italic]Aims to design programmes to create healthier workplace environments and implement workplace programmes that support mental health and wellbeing. Businesses are assisted with creating an organisation that is non-discriminatory and open to helping those who need mental health support.",
    image: "https://cdn.pixabay.com/photo/2018/04/25/22/49/cranium-3350798_640.png",
    link: "https://www.blackdoginstitute.org.au/education-services/workplaces/",
  },
];
const backgroundColors = [
  "#e8dff5", 
    "#fce1e4", 
    "#daeaf6",
    "#fcf4dd",
    "#ddedea"
];

const Initiatives = () => {
  return (
    <div className="initiatives-container" style={{ width: '100%' }}>
      <h1>Mental Health Initiatives</h1>
      {initiatives.map((initiative, index) => (
        <MentalHealthInitiative
          key={index}
          text={initiative.text}
          image={initiative.image}
          alt={initiative.text} 
          link={initiative.link}
          backgroundColor={backgroundColors[index % backgroundColors.length]}
        />
      ))}
    </div>
  );
};

export default Initiatives;
