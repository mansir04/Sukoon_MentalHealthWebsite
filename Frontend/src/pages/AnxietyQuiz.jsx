import React, { useState, useEffect } from "react";
import {AnxietyResult} from "../components/QuizResult";

const AnxietyQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "How often have you felt restless or fidgety?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been unable to concentrate or your mind has wandered?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been bothered by trouble falling or staying asleep?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been bothered by feeling tired or having low energy?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been bothered by feeling worthless or guilty?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been bothered by trouble making decisions?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been bothered by muscle tension?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been bothered by being easily startled?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been bothered by feeling afraid that something terrible might happen?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been bothered by having a racing heart?",
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
        <h2>ANXIETY TEST</h2>
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
            
            {score > 1 ? <AnxietyResult score={score} /> : null}
            <button onClick={handleResetClick} id="retake-button" className="button">
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnxietyQuiz;
