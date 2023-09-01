import React, { useState, useEffect } from "react";
import AnxietyResult from "../components/AnxietyResult";

const AnxietyTest = () => {
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
    <div className="AnxietyQuiz">
    
    <div className="container">
      <h1 className="heading-txt">Anxiety Test</h1>
      <h3 className="subheading"> <center>attempt all questions for accurate results</center></h3>
      
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
      <button onClick={handleSubmit} id="submit-button"className='button'>Submit</button>
      <div id="score">
        {score > 1 ? <AnxietyResult score={score} /> : <></>}
      </div>
    </div>
    </div>
  );
  
};

export default AnxietyTest;
