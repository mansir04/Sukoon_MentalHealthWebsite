import React from 'react';
import { Link } from 'react-router-dom';
import '.././App.css';
import quiz1Image from '../images/anx.jpg';
import quiz2Image from '../images/quizimg.jpg';
import quiz3Image from '../images/ocd.jpg';
import quiz4Image from '../images/adhd.jpg';

const Quiz = () => {
  return (
    <div className="Quiz">
      <div className="container">
        <h1 >Take A Mental Health Test</h1>
        <center>
          <h3 >
            Please attempt all the questions honestly for accurate results
          </h3>
        </center>

        <div className="quiz-row">
          {/* First pair of quizzes */}
          <div className="card">
            <div className="card-image">
              <img src={quiz1Image} alt="Quiz 1" />
            </div>
            <div className="card-content">
              <h2>Anxiety  Test</h2>
              <p>Our quiz can help you determine whether you have Anxiety.</p>
              <Link to="/anxiety-quiz">Take Quiz</Link>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={quiz2Image} alt="Quiz 2" />
            </div>
            <div className="card-content">
              <h2>Depression Test</h2>
              <p>
                Are you depressed? Our quiz can help you determine whether you
                have depression.
              </p>
              <Link to="/depression-quiz">Take Quiz</Link>
            </div>
          </div>
          {/* End of the first pair */}
        </div>

        <div className="quiz-row">
          {/* Second pair of quizzes */}
          <div className="card">
            <div className="card-image">
              <img src={quiz3Image} alt="Quiz 3" />
            </div>
            <div className="card-content">
              <h2>OCD Test</h2>
              <p>Our quiz can help you determine whether you have OCD</p>
              <Link to="/ocd-quiz">Take Quiz</Link>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={quiz4Image} alt="Quiz 4" />
            </div>
            <div className="card-content">
              <h2>ADHD Test</h2>
              <p>
                Do I have ADHD? Our quiz can help you determine whether you
                have ADHD
              </p>
              <Link to="/adhd-quiz">Take Quiz</Link>
            </div>
          </div>
          {/* End of the second pair */}
        </div>

        {/* Text note at the end */}
        <p className="end-note">
          NOTE : Please remember that the results of these quizzes are not a substitute
          for professional medical advice. If you have concerns about your mental
          health, consult a healthcare professional.
        </p>
      </div>
    </div>
  );
};

export default Quiz;
