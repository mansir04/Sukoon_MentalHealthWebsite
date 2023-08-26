import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  return (
  <div className="Quiz">
    <h2>Add quizzez here.</h2>
  
      <ul>
        <li>
          <Link to="/anxiety-quiz">Take Anxiety Quiz</Link>
        </li>
        <li>
          <Link to="/depression-quiz">Take Depression Quiz</Link>
        </li>
        <li>
          <Link to="/ocd-quiz">Take OCD Quiz</Link>
        </li>
        <li>
          <Link to="/adhd-quiz">Take ADHD Quiz</Link>
        </li>
      </ul>
  </div>
  
  );
};

export default Quiz;
