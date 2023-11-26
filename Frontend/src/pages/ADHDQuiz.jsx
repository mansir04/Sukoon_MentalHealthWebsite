import React, { useState, useEffect } from "react";
import {AdhdResult} from "../components/QuizResult";

const ADHDQuiz = () => {
  const questions = [
    {
      question: "Do you often have trouble paying attention?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Are you easily distracted?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
   {
      question: "Do you have trouble staying organized?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you have trouble following through on instructions?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you fidget or squirm a lot?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you have trouble sitting still?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you have trouble waiting your turn?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you often interrupt others?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you have trouble controlling your impulses?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you often feel restless or have trouble relaxing?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you have trouble paying attention to details?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
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
    const answerValue = clickedOption;

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
     
      const answerValue = clickedOption;
      
      setScore((prevScore) => prevScore + answerValue);
      
     document.getElementById("submit-button").style.display = "block;";
  
    };
    
  }; 
  return (
    <div className="commonQuiz">
      <div className="container">
        <h2>ADHD TEST</h2>
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
            <h2 className="score">{score}</h2>
            {isQuizOver && !showResult ?  (
            <button onClick={handleSubmit} id="submit-button"className='button'>
              Submit
              </button>
              ) : null}
            
            {score > 1 ? <AdhdResult score={score} /> : null}
            <button onClick={handleResetClick} id="retake-button" className="button">
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ADHDQuiz;
