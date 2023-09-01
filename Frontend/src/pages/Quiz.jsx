import React from 'react';
import { Link } from 'react-router-dom';
import ".././App.css";
import quiz1Image from '../images/anx.jpg'; // Import your image files like this
import quiz2Image from '../images/quizimg.jpg';
import quiz3Image from '../images/ocd.jpg';
import quiz4Image from '../images/adhd.jpg';


const Quiz = () => {
  return (
    <div className="Quiz">
      <div className="container">
      <h1 className="heading-txt">Take a mental health test</h1>
      
      <div className="card">
        <div className="card-image">
          <img src= {quiz1Image} alt="Quiz 1" />
        </div>
        <div className="card-content">
          <h2>Anxiety Test Test</h2>
          <p> our quiz can help you determine whether you have Anxiety. </p>
          <Link to="/anxiety-quiz">Take Quiz</Link>
        </div>
      </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src= {quiz2Image} alt="Quiz 2" />
        </div>
        <div className="card-content">
          <h2> Depression Test</h2>
          <p>are you depressed? our quiz can help you determine whether you have depression.</p>
          <Link to="/depression-quiz">Take Quiz</Link>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src={quiz3Image} alt="Quiz 3" />
        </div>
        <div className="card-content">
          <h2>OCD Test</h2>
          <p> our quiz can help you determine whether you OCD</p>
          <Link to="/ocd-quiz">Take Quiz</Link>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src= {quiz4Image} alt="Quiz 4" />
        </div>
        <div className="card-content">
          <h2>ADHD Test</h2>
          <p>Do i have ADHD?our quiz can help you determine whether you have ADHD</p>
          <Link to="/adhd-quiz">Take Quiz</Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
