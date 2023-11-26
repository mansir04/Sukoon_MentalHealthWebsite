import React, { useState } from 'react';

const Ptsd = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://cfah.org/wp-content/uploads/2022/05/Type-of-Traumas-cause-PTSD.jpg?_t=1665690466',
    'https://cfah.org/wp-content/uploads/2022/05/PTSD-between-general-population-and-trauma-victims.jpg?_t=1665690993',
   ' https://static.cambridge.org/binary/version/id/urn:cambridge.org:id:binary:20180530082546439-0195:S0007125000245145:S0007125000245145_fig1g.jpeg?pub-status=live',
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="mental-illness-page">
      <h2>Post-traumatic Stress Disorder (PTSD)</h2>

      <div className="image-container">
        <button className="arrow-button prev-button" onClick={previousImage}>
          &larr;
        </button>
        <img src={images[currentImage]} alt="Depression" />
        <button className="arrow-button next-button" onClick={nextImage}>
          &rarr;
        </button>
      </div>

      <h1>Post-traumatic Stress Disorder (PTSD)</h1>

<p>Post-traumatic Stress Disorder (PTSD) is a mental health condition that can develop after an individual experiences or witnesses a traumatic event. Traumatic events triggering PTSD may include, but are not limited to, military combat, sexual assault, natural disasters, accidents, or witnessing a violent death.</p>

<h2>Symptoms:</h2>

<h3>Intrusive Memories:</h3>
<ul>
  <li>Flashbacks or distressing, vivid memories of the traumatic event.</li>
  <li>Recurrent distressing dreams related to the trauma.</li>
</ul>

<h3>Avoidance:</h3>
<ul>
  <li>Avoidance of reminders or situations associated with the traumatic event.</li>
  <li>Avoidance of discussing or thinking about the trauma.</li>
</ul>

<h3>Negative Changes in Mood and Cognition:</h3>
<ul>
  <li>Persistent negative emotions (e.g., fear, anger, guilt).</li>
  <li>Loss of interest in activities once enjoyed.</li>
  <li>Difficulty experiencing positive emotions.</li>
  <li>Distorted beliefs about oneself or others.</li>
</ul>

<h3>Arousal and Reactivity:</h3>
<ul>
  <li>Hypervigilance and exaggerated startle response.</li>
  <li>Irritability, aggression, or self-destructive behavior.</li>
  <li>Difficulty concentrating or sleeping.</li>
</ul>

<h2>Duration and Impact:</h2>
<p>Duration: Symptoms must persist for more than a month and cause significant distress or impairment in daily functioning.</p>
<p>Onset: Symptoms may begin shortly after the traumatic event, but the onset can be delayed, sometimes for months or years.</p>

<h2>Causes and Risk Factors:</h2>
<ul>
  <li><strong>Traumatic Events:</strong> Exposure to actual or threatened death, serious injury, or sexual violence.</li>
  <li><strong>Individual Factors:</strong> Personal history of trauma or mental health issues, lack of social support, neurobiological factors, and genetic predisposition.</li>
  <li><strong>Coping Mechanisms:</strong> The effectiveness of coping strategies used after the traumatic event.</li>
</ul>

<h2>Treatment:</h2>
<h3>Psychotherapy:</h3>
<ul>
  <li><strong>Cognitive-Behavioral Therapy (CBT):</strong> Focuses on changing thought patterns and behaviors related to the trauma.</li>
  <li><strong>Exposure Therapy:</strong> Gradual and controlled exposure to the traumatic memory to reduce avoidance.</li>
</ul>

<h3>Medications:</h3>
<ul>
  <li><strong>Antidepressants:</strong> Selective Serotonin Reuptake Inhibitors (SSRIs) or Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs) may be prescribed.</li>
</ul>

<h3>Eye Movement Desensitization and Reprocessing (EMDR):</h3>
<p>A structured therapy involving focusing on a traumatic memory while engaging in specific eye movements.</p>

<h3>Support Groups:</h3>
<p>Sharing experiences with others who have gone through similar situations.</p>

<h3>Self-Care:</h3>
<p>Establishing routines, maintaining a healthy lifestyle, and avoiding substances that can exacerbate symptoms.</p>

<h2>Seeking Help:</h2>
<ul>
  <li><strong>Professional Support:</strong> Individuals experiencing symptoms of PTSD should seek help from mental health professionals.</li>
  <li><strong>Early Intervention:</strong> Timely intervention and appropriate treatment can significantly improve the prognosis.</li>
</ul>

<p>If you or someone you know is struggling with PTSD, it's crucial to reach out to mental health professionals for a comprehensive assessment and tailored treatment plan.</p>

      </div>
  );
};

export default Ptsd;
