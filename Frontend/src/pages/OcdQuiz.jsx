import React, { useState, useEffect } from 'react';
import {OcdResult} from "../components/QuizResult";

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
  ];
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    const answerValue = clickedOption; // Use the clicked option as the answer value

    setScore((prevScore) => prevScore + answerValue);
  };

  const handleResetClick = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    setClickedOption(0);
  };

  const isQuizOver = currentQuestion === questions.length;
  const handleSubmit = () => {
    const handleSubmit = () => {
      // Calculate the score based on the selected options
      const answerValue = clickedOption;
      
      // Add the score for the current question
      setScore((prevScore) => prevScore + answerValue);
      
      // Hide the submit button
      document.getElementById("submit-button").style.display = "block;";
    };
    
  }; 
  return (
    <div className="commonQuiz">
      <div className="container">
        <h2>OCD TEST</h2>
        {!isQuizOver ? (
          <div className="Quiz-question-option">
            <h3>{questions[currentQuestion].question}</h3>
            <p>
              {questions[currentQuestion].answers.map((answer, answerIndex) => (
                <button
                  className={`option-btn ${
                    clickedOption === answerIndex + 1 ? "checked" : null
                  }`}
                  key={answerIndex}
                  onClick={() => setClickedOption(answerIndex + 1)}
                >
                  {answer}
                </button>
              ))}
            </p>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
          </div>
        ) : (
          <div>
            <h2 className="result-heading">Result</h2>
            <h3 className="score">{score}</h3>
            {isQuizOver && !showResult ?  (
            <button onClick={handleSubmit} id="submit-button"className='button'>
              Submit
              </button>
              ) : null}
            
            {score > 1 ? <OcdResult score={score} /> : null}
            <button onClick={handleResetClick} id="retake-button" className="button">
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OcdQuiz;
