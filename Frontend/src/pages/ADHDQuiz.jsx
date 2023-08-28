import React, { useState, useEffect } from "react";
import AdhdResult from "../components/AdhdResult";
import ".././App.css";

const ADHDQuiz = () => {
  const [questions, setQuestions] = useState([
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
  ]);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     // Calculate the user's score
  //     const score = questions.reduce((acc, question) => {
  //       const answer = e.target[question.question].value;
  //       return acc + (answer === "Yes" ? 1 : 0);
  //     }, 0);

  //     // Display the user's score
  //     alert(`Your score is ${score}.`);
  //   };

  //   return (
  //     <div>
  //       <h1>ADHD Quiz</h1>

  //       <form onSubmit={handleSubmit}>
  //         {questions.map((question) => (
  //           <div key={question.question}>
  //             <p>{question.question}</p>
  //             <input type="radio" name={question.question} value="Yes" /> Yes
  //             <input type="radio" name={question.question} value="No" /> No
  //           </div>
  //         ))}

  //         <button type="submit">Submit</button>
  //       </form>
  //     </div>
  //   );
  // };
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
    <div className="ADHDQuiz">

    <div className="container">
      <h1 className="heading-txt">ADHD TEST</h1>
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
      <button onClick={handleSubmit} id="submit-button" className='button'>  Submit</button>
      <div id="score">
        {score > 1 ? <AdhdResult score={score} /> : <></>}
      </div>
    </div>
    </div>
  );
};


export default ADHDQuiz;
