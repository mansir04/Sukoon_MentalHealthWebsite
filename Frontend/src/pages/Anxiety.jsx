import React, { useState } from 'react';

const Anxiety = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://www.cdc.gov/childrensmentalhealth/images/Depression-Anxiety-Behavior-Disorders-chart.jpg?_=03418',
    'https://assets.weforum.org/editor/ZM8M512ZI2ZMZagSB3MwmmX1URuwvccSy5ISTECukwo.PNG',
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="mental-illness-page">
      <h2>Anxiety Disorder</h2>

      <div className="image-container">
        <button className="arrow-button prev-button" onClick={previousImage}>
          &larr;
        </button>
        <img src={images[currentImage]} alt="Depression" />
        <button className="arrow-button next-button" onClick={nextImage}>
          &rarr;
        </button>
      </div>
      
      
    <p>Anxiety disorders encompass a range of conditions characterized by excessive and persistent feelings of anxiety and fear. These feelings can interfere with daily activities, relationships, and overall quality of life. Some common types of anxiety disorders include:</p>
    <ol>
        <li><strong>Generalized Anxiety Disorder (GAD):</strong> People with GAD experience excessive worry and fear about various aspects of their life, even when there is no specific cause for concern.</li>
        <li><strong>Panic Disorder:</strong> Panic disorder involves recurring panic attacks—sudden episodes of intense fear or discomfort, often accompanied by physical symptoms like rapid heartbeat, sweating, trembling, and a sense of impending doom.</li>
        <li><strong>Social Anxiety Disorder (Social Phobia):</strong> This disorder is characterized by intense fear and avoidance of social situations due to a fear of being judged, embarrassed, or humiliated.</li>
        <li><strong>Specific Phobias:</strong> Specific phobias involve an intense and irrational fear of a particular object, situation, or activity. Common phobias include fear of heights, spiders, flying, and enclosed spaces.</li>
        <li><strong>Obsessive-Compulsive Disorder (OCD):</strong> OCD involves intrusive and distressing thoughts (obsessions) that lead to compulsive behaviors or rituals performed to reduce anxiety.</li>
        <li><strong>Post-Traumatic Stress Disorder (PTSD):</strong> PTSD can develop after exposure to a traumatic event. It involves intrusive memories, nightmares, and emotional distress related to the trauma.</li>
    </ol>

    <h2>Phobias:</h2>
    <p>Phobias are a type of anxiety disorder characterized by an intense, irrational fear of a specific object, situation, or activity. People with phobias often go to great lengths to avoid the feared stimulus. Phobias can be categorized into several types:</p>
    <ol>
        <li><strong>Specific Phobias:</strong> These are phobias of particular objects or situations, such as animals, heights, water, flying, or blood.</li>
        <li><strong>Social Phobia (Social Anxiety Disorder):</strong> This phobia involves a fear of social situations and a concern about being negatively judged or embarrassed by others.</li>
        <li><strong>Agoraphobia:</strong> Agoraphobia involves a fear of situations or places where escape might be difficult, such as crowded spaces or situations where help might not be readily available.</li>
    </ol>

    <h2>Treatment:</h2>
    <p>Treatment for anxiety disorders and phobias often involves a combination of approaches:</p>
    <ol>
        <li><strong>Therapy:</strong> Cognitive-behavioral therapy (CBT) is a common approach. Exposure therapy, a type of CBT, involves gradually facing the feared stimulus under controlled conditions to reduce anxiety over time.</li>
        <li><strong>Medications:</strong> Antidepressants and anti-anxiety medications can be prescribed by a healthcare professional to manage symptoms.</li>
        <li><strong>Relaxation Techniques:</strong> Techniques such as deep breathing, mindfulness, and progressive muscle relaxation can help manage anxiety symptoms.</li>
        <li><strong>Lifestyle Changes:</strong> Regular exercise, a balanced diet, sufficient sleep, and avoiding substances like caffeine and alcohol can contribute to better mental well-being.</li>
    </ol>

    <p>If you or someone you know is struggling with anxiety or phobias, seeking professional help from a mental health provider is important. These conditions are treatable, and with the right support, individuals can learn effective strategies for managing their symptoms and improving their overall quality of life.</p>
      
      </div>
  );
};

export default Anxiety;