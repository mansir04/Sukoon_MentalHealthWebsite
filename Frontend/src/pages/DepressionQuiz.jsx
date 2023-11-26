import React, { useState, useEffect } from "react";
import {DepressionResult} from "../components/QuizResult";
import ".././App.css";


const DepressionQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "I have lost interest in activities I used to enjoy.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have difficulty concentrating or making decisions.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have feelings of worthlessness or guilt.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have thoughts of death or suicide.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have changes in my appetite.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have changes in my sleep patterns.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have decreased energy levels.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have difficulty controlling my emotions.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have physical aches and pains.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have withdrawn from social activities.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
  ]);

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
        <h2>DEPRESSION TEST</h2>
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
            
            {score > 1 ? <DepressionResult score={score} /> : null}
            <button onClick={handleResetClick} id="retake-button" className="button">
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepressionQuiz;
