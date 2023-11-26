import React, { useState } from 'react';

const Depression = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://assets-global.website-files.com/60b79f6742e9397ba3ee0357/640b4ccc0771bdf381e60449_depression%20by%20demographic-1.png',
    'https://www.cdc.gov/nchs/images/databriefs/351-400/db379-fig2.gif',
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="mental-illness-page">
      <h2>Depression</h2>

      <div className="image-container">
        <button className="arrow-button prev-button" onClick={previousImage}>
          &larr;
        </button>
        <img src={images[currentImage]} alt="Depression" />
        <button className="arrow-button next-button" onClick={nextImage}>
          &rarr;
        </button>
      </div>

      <h1>Symptoms of Depression:</h1>
    <ul>
        <li>Persistent sadness or low mood</li>
        <li>Loss of interest or pleasure in activities</li>
        <li>Fatigue and decreased energy</li>
        <li>Changes in appetite or weight</li>
        <li>Sleep disturbances (insomnia or oversleeping)</li>
        <li>Feelings of worthlessness or guilt</li>
        <li>Difficulty concentrating or making decisions</li>
        <li>Recurrent thoughts of death or suicide</li>
    </ul>

    <h1>Types of Depression:</h1>
    <ul>
        <li>Major Depressive Disorder (MDD): Characterized by severe and persistent symptoms.</li>
        <li>Persistent Depressive Disorder (Dysthymia): A milder but chronic form of depression.</li>
        <li>Bipolar Disorder: Alternating periods of depression and mania.</li>
        <li>Seasonal Affective Disorder (SAD): Depression that occurs during specific seasons.</li>
        <li>Postpartum Depression: Affects new mothers after childbirth.</li>
        <li>Atypical Depression: Symptoms include increased appetite and hypersomnia.</li>
    </ul>

    <h1>Treatment for Depression:</h1>
    <ul>
        <li>Psychotherapy: Talk therapy, such as cognitive-behavioral therapy (CBT) or interpersonal therapy (IPT), can
            help individuals manage their thoughts and emotions.</li>
        <li>Medication: Antidepressant medications, such as selective serotonin reuptake inhibitors (SSRIs) and
            serotonin-norepinephrine reuptake inhibitors (SNRIs), can be prescribed by a psychiatrist.</li>
        <li>Lifestyle Changes: Regular exercise, a balanced diet, adequate sleep, and stress management techniques can help
            alleviate symptoms.</li>
        <li>Support Networks: Building a strong support system with friends and family can be beneficial.</li>
        <li>Electroconvulsive Therapy (ECT) and Transcranial Magnetic Stimulation (TMS): These are options for severe,
            treatment-resistant depression.</li>
    </ul>

    <p>It's important to note that seeking professional help is crucial when dealing with depression. If you or someone you
        know is struggling with depression, it's essential to reach out to a mental health professional, a healthcare
        provider, or a helpline to discuss treatment options and get the necessary support. Depression is a treatable
        condition, and with the right interventions, many individuals can experience significant improvement in their
        mental health and overall quality of life.</p>

      </div>
  );
};

export default Depression;
