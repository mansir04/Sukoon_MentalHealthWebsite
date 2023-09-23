import React, { useState, useEffect } from 'react';
import OcdResult from "../components/OcdResult";
import ".././App.css";

function OcdQuiz() {

  const questions = [
    {
      question: 'Do you have an intense fear of germs or contaminants?',
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: 'Do you feel the need to check things repeatedly, such as locks or switches?',
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: 'Do you have a strict need for things to be orderly or symmetrical?',
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you feel the need to perform repetitive behaviors in order to reduce your anxiety?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    }, {
      question: 'Do your obsessions and compulsions take up a lot of your time?',
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    }, {
      question: "Do you feel like you can't control your obsessions and compulsions?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    }, {
      question: "Do you have thoughts of contamination?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    }, {
      question: "Do you try to resist your obsessions or compulsions, but find it difficult to do so?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    }, {
      question: "Do you have thoughts of symmetry or order?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    }, {
      question: "Do you have thoughts of needing to repeat words or phrases?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    }
    // Add more questions here...
  ];


  const [score, setScore] = useState(0)


  const handleSubmit = () => {


    for (const question of questions) {
      const answerIndex = questions.indexOf(question);

      const answer = parseInt(document.querySelector(`input[type='radio'][name=answer-${answerIndex}]:checked`).value);
      console.log("asnwer:" + answer)
      setScore(prev => prev + answer)
    }

    document.getElementById("submit-button").classList.add("hidden")

  };

  useEffect(() => {
  }, [score])


  return (
    <div className="OcdQuiz">  
    <div className="container">

      <h1 className="heading-txt">OCD Test</h1>
      <div>
        {questions.map((question, index) => (
          <div key={index}>
            <h2 className="question">{question.question}</h2>
            <ul className="option-container">
          
              {question.answers.map((answer, answerIndex) => (
                <li key={answerIndex} id={`answer-${answerIndex}`} className="option">
                  <input
                    type="radio"
                    id={`answer-${index}-${answerIndex}`}
                    name={`answer-${index}`}
                    value={answerIndex + 1}
                  />
                  {answer}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <button onClick={handleSubmit} id="submit-button" className='button'> Submit</button>

      <div id="score">
        {score > 1 ? <OcdResult score={score} /> : <></>}
      </div>
    </div>
    </div>
  );
};





export default OcdQuiz;