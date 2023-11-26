import React from "react";
import ".././App.css";

function DepressionResult(props) {
  return (
    <>
      <div className="show-score">
        <p className="result">
          Result :
          {props.score > 0 && props.score <= 10
            ? "you have Mild depression. This is the mildest form of depression and is characterized by a few depressive symptoms that do not significantly interfere with daily life."
            : props.score > 10 && props.score <= 20
            ? "you have Moderate depression. This level of depression is more severe than mild depression and causes more noticeable symptoms. It can interfere with daily activities and relationships."
            : props.score > 20 && props.score <= 30
            ? "you have Severe depression. This is the most severe form of depression and is characterized by a number of disabling symptoms. It can make it difficult to function at all."
            : props.score > 30 && props.score <= 50
            ? "This is a rare form of depression that is accompanied by psychotic symptoms, such as delusions or hallucinations."
            : a}
        </p>
      </div>
    </>
  );
}

function AdhdResult(props) {
  return (
    <div className="show-score">
      <p className="result">
        Result :
        {props.score > 0 && props.score <= 20
          ? "you have MILD ADHD. It is characterized by many symptoms that are not very disruptive to daily life. People with mild ADHD may need medication and other interventions to manage their symptoms and function in daily life."
          : props.score > 20 && props.score <= 35
          ? "you have Moderate ADHD. It is characterized by more symptoms that are more disruptive to daily life. People with moderate ADHD may need medication or other interventions to manage their symptoms."
          : props.score > 35 && props.score <= 50
          ? "you have severe ADHD. It is characterized by many symptoms that are very disruptive to daily life. People with severe ADHD may need medication and other interventions to manage their symptoms and function in daily life."
          : a}
      </p>
    </div>
  );
}
function OcdResult(props) {
  return (
    <>
      <div className="show-score">
        
        <p className="result">
          Result :
          {props.score > 0 && props.score <= 10
            ? "Subclinical OCD: Scores of 0-10 indicate subclinical OCD. This means that the person has some OCD symptoms, but they are not severe enough to cause significant distress or impairment in daily life.."
            : props.score > 10 && props.score <= 20
            ? " Mild OCD: Scores of 10-25 indicate mild OCD. This means that the persons OCD symptoms are causing some distress and impairment in daily life, but they are still manageable."
            : props.score > 20 && props.score <= 35
            ? "Moderate OCD: Scores of 20-35 indicate moderate OCD. This means that the persons OCD symptoms are causing significant distress and impairment in daily life. They may have difficulty working, socializing, or taking care of themselves."
            : props.score > 35 && props.score <= 50
            ? "Severe OCD: Scores of 35-450 indicate severe OCD. This means that the persons OCD symptoms are causing very significant distress and impairment in daily life. They may be unable to work or socialize, and they may have difficulty taking care of themselves."
            : a}{" "}
        </p>
      </div>
    </>
  );
}
function AnxietyResult(props) {
  return (
    <>
      <div className="show-score">
      
        <p className="result">
          Result :
          {props.score > 40 && props.score <= 50
            ? "Your anxiety levels are very high. Please prioritize your mental health. Reach out to a mental health professional urgently for personalized support and guidance."
            : props.score > 30 && props.score <= 40
            ? "It appears your anxiety levels are high. It's important to seek professional help. Reach out to a mental health expert for guidance and support."
            : props.score > 10 && props.score <= 30
            ? "Your anxiety levels are moderate. Consider incorporating relaxation techniques into your routine and reach out for support when needed."
            : props.score > 0 && props.score <= 10
            ? "Congratulations! Your anxiety levels are low. Keep practicing healthy coping mechanisms to maintain your well-being."
            : ""}
        </p>
      </div>
    </>
  );
}

export { DepressionResult, AdhdResult,OcdResult,AnxietyResult };
