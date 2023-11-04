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
            ? "You have Panic level anxiety it is a type of severe anxiety that is characterized by a sudden and intense episode of fear. Panic attacks can last for several minutes and can cause a variety of physical symptoms, such as chest pain, shortness of breath, dizziness, and nausea."
            : props.score > 30 && props.score <= 40
            ? "You have Severe anxiety it is the most severe level of anxiety. It causes very intense physical and mental symptoms, such as panic attacks, chest pain, and difficulty breathing. Severe anxiety can make it impossible to function at all."
            : props.score > 10 && props.score <= 30
            ? "You have Moderate anxiety it is a more severe level of anxiety. It causes more intense physical and mental symptoms, such as difficulty concentrating, fatigue, and irritability. Moderate anxiety can make it difficult to function at work or school, and it can also interfere with relationships."
            : props.score > 0 && props.score <= 10
            ? "You have Mild anxiety it is the least severe level of anxiety. It may cause mild physical symptoms, such as a racing heart or sweating, and some mental symptoms, such as worry or restlessness. Mild anxiety is usually manageable and does not interfere with daily life."
            : "You have Mild anxiety it is the least severe level of anxiety. It may cause mild physical symptoms, such as a racing heart or sweating, and some mental symptoms, such as worry or restlessness. Mild anxiety is usually manageable and does not interfere with daily life."}
        </p>
      </div>
    </>
  );
}

export { DepressionResult, AdhdResult,OcdResult,AnxietyResult };
