import React, { useState } from 'react';

const Schizophrenia = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41537-020-0102-z/MediaObjects/41537_2020_102_Fig1_HTML.png',
    'https://www.analysisgroup.com/globalassets/uploadedimages/content/insights/ag_features/health_care_bulletin/bulletin_fall_2016/economic_burden_of_schizophrenia_in_the_us_exceeded_$155_billion_in_2013/schizophrenia_graph.gif',
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="mental-illness-page">
      <h2>Schizophrenia</h2>

      <div className="image-container">
        <button className="arrow-button prev-button" onClick={previousImage}>
          &larr;
        </button>
        <img src={images[currentImage]} alt="Bipolar" />
        <button className="arrow-button next-button" onClick={nextImage}>
          &rarr;
        </button>
      </div>
      
      
      <h1>Schizophrenia</h1>

<p>Bipolar affective disorder, commonly known as bipolar disorder, is a mental health condition characterized by extreme mood swings that include episodes of mania (or hypomania) and depression. These mood swings can be severe and disruptive to a person's life. Bipolar disorder is a chronic condition, and while it cannot be cured, it can be effectively managed with treatment.</p>

<p>There are two main types of bipolar disorder:</p>

<ol>
    <li><strong>Bipolar I Disorder:</strong> In this type, individuals experience manic episodes that last for at least seven days or are severe enough to require hospitalization. Depressive episodes often accompany manic episodes or alternate with them.</li>
    <li><strong>Bipolar II Disorder:</strong> This type is characterized by recurrent depressive episodes and at least one hypomanic episode. Hypomania is a milder form of mania, and it doesn't usually lead to severe impairment or hospitalization.</li>
</ol>

<p>Common symptoms of bipolar disorder include:</p>

<ul>
    <li>Mania (or hypomania) symptoms: Euphoria, extreme irritability, increased energy, racing thoughts, decreased need for sleep, increased self-esteem, reckless behavior, and poor judgment.</li>
    <li>Depressive symptoms: Persistent sadness, loss of interest in previously enjoyed activities, changes in appetite and weight, difficulty concentrating, fatigue, feelings of guilt or worthlessness, and thoughts of suicide.</li>
</ul>

<p>The exact cause of bipolar disorder is not fully understood, but it is believed to result from a combination of genetic, biological, and environmental factors. It often emerges in late adolescence or early adulthood.</p>

<p>Treatment for bipolar disorder typically involves a combination of psychotherapy (talk therapy), medication, and lifestyle management. Medications, such as mood stabilizers (e.g., lithium), antipsychotics, and antidepressants, are often prescribed to help stabilize mood and manage symptoms. Psychotherapy, such as cognitive-behavioral therapy (CBT) or interpersonal therapy, can help individuals learn coping strategies and manage their condition effectively. Lifestyle factors, like maintaining a regular sleep schedule and reducing stress, can also play a crucial role in symptom management.</p>

<p>It's important for individuals with bipolar disorder to work closely with mental health professionals to develop a personalized treatment plan and to monitor their condition regularly. With proper treatment and support, many people with bipolar disorder can lead fulfilling lives and effectively manage their symptoms.</p>

      </div>
  );
};

export default Schizophrenia;