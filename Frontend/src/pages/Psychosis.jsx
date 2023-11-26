import React, { useState } from 'react';

const Psychosis = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://pbs.twimg.com/media/EYTyL8hWsAAjjXv.jpg',
    'https://www.thelancet.com/cms/attachment/7900fe1c-85b6-45bd-a034-4e2622528b34/gr1.jpg',
    
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="mental-illness-page">
      <h2>Psychosis</h2>

      <div className="image-container">
        <button className="arrow-button prev-button" onClick={previousImage}>
          &larr;
        </button>
        <img src={images[currentImage]} alt="Psychosis" />
        <button className="arrow-button next-button" onClick={nextImage}>
          &rarr;
        </button>
      </div>

     
    <p>Psychosis is a mental health condition characterized by a disconnection from reality, leading to a range of abnormal thoughts, perceptions, emotions, and behaviors. Individuals experiencing psychosis may have difficulty distinguishing between what is real and what is not. Here are key aspects of psychosis:</p>

    <h2>Symptoms:</h2>

    <ul>
        <li><strong>Hallucinations:</strong> Perceptions without external stimuli, such as hearing voices or seeing things that others do not.</li>
        <li><strong>Delusions:</strong> Strongly held false beliefs that are resistant to reasoning or contradictory evidence.</li>
        <li><strong>Disorganized Thinking:</strong> Difficulty organizing thoughts and expressing them coherently. Inability to connect thoughts logically.</li>
        <li><strong>Impaired Insight:</strong> Lack of awareness that one's thoughts or perceptions are abnormal.</li>
        <li><strong>Impaired Judgment:</strong> Difficulty making sound decisions.</li>
        <li><strong>Changes in Behavior:</strong> Disorganized or abnormal behavior that may be unpredictable.</li>
    </ul>

    <h2>Types of Psychotic Disorders:</h2>

    <ul>
        <li><strong>Schizophrenia:</strong> Characterized by a combination of positive and negative symptoms, often with significant social and occupational dysfunction.</li>
        <li><strong>Schizoaffective Disorder:</strong> Features both psychotic symptoms and mood disturbances (major depressive episode or manic episode).</li>
        <li><strong>Brief Psychotic Disorder:</strong> Sudden onset of psychotic symptoms, often triggered by a significant stressor, with a duration of less than one month.</li>
        <li><strong>Substance-Induced Psychotic Disorder:</strong> Resulting from the use of substances, including drugs or alcohol.</li>
    </ul>

    <h2>Causes and Risk Factors:</h2>

    <ul>
        <li><strong>Genetics:</strong> Family history of psychotic disorders may increase the risk.</li>
        <li><strong>Brain Structure and Neurochemistry:</strong> Imbalances in neurotransmitters, especially dopamine.</li>
        <li><strong>Prenatal Factors:</strong> Complications during pregnancy or birth.</li>
        <li><strong>Substance Use:</strong> Use of certain substances, including cannabis, LSD, or amphetamines.</li>
        <li><strong>Trauma:</strong> Exposure to severe stress or trauma.</li>
    </ul>

    <h2>Treatment:</h2>

    <ul>
        <li><strong>Antipsychotic Medications:</strong> Medications to manage and alleviate symptoms.</li>
        <li><strong>Psychotherapy:</strong> Cognitive-behavioral therapy (CBT) to address distorted thinking patterns.</li>
        <li><strong>Hospitalization:</strong> In severe cases or during acute episodes.</li>
        <li><strong>Community Support:</strong> Rehabilitation programs and community services to aid in daily functioning.</li>
        <li><strong>Family Education and Support:</strong> Involving family members in the treatment process.</li>
    </ul>

    <h2>Seeking Help:</h2>

    <p>If someone is experiencing symptoms of psychosis, seeking prompt professional help is essential. Early intervention and appropriate treatment can improve long-term outcomes. Understanding and addressing psychosis often require a comprehensive approach involving medical, psychological, and social interventions. It's crucial to consult with mental health professionals for accurate diagnosis and tailored treatment plans.</p>
      </div>
  );
};

export default Psychosis;
