import React, { useState } from 'react';

const PanicDisorder = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://www.researchgate.net/publication/51752088/figure/fig1/AS:601662263672849@1520458870968/Prevalence-of-Diagnostic-and-Statistical-Manual-of-Mental-Disorders-Revised-Third.png',
    'https://cdn.koreabiomed.com/news/photo/201703/310_298_3359.jpg',
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="mental-illness-page">
      <h2>Panic Disorder</h2>

      <div className="image-container">
        <button className="arrow-button prev-button" onClick={previousImage}>
          &larr;
        </button>
        <img src={images[currentImage]} alt="Depression" />
        <button className="arrow-button next-button" onClick={nextImage}>
          &rarr;
        </button>
      </div>

      <h1>Panic Disorder</h1>
    <p>Panic Disorder is a mental health condition characterized by recurrent and unexpected panic attacks, which are intense
        episodes of extreme fear or discomfort. These panic attacks can be accompanied by physical symptoms such as heart
        palpitations, shortness of breath, sweating, trembling, and a feeling of impending doom.</p>

    <h2>Symptoms of Panic Disorder:</h2>
    <ol>
        <li>Recurrent and unexpected panic attacks.</li>
        <li>Persistent worry about future panic attacks or their consequences.</li>
        <li>Behavioral changes such as avoiding places or situations where panic attacks have occurred in the past.</li>
    </ol>

    <h2>Treatment for Panic Disorder:</h2>
    <p>Panic Disorder can be effectively treated, and several treatment options are available:</p>
    <ul>
        <li><strong>Cognitive-Behavioral Therapy (CBT):</strong> CBT, especially a form known as Cognitive-Behavioral Therapy for
            Panic Disorder (CBT-PD), is a highly effective treatment. It helps individuals identify and change irrational thought
            patterns and behaviors that contribute to panic attacks. Exposure therapy is often a component of CBT, where individuals
            gradually confront their fears and sensations associated with panic in a controlled and safe manner.</li>
        <li><strong>Medications:</strong>
            <ul>
                <li><strong>Antidepressants:</strong> Selective Serotonin Reuptake Inhibitors (SSRIs) and Serotonin-Norepinephrine
                    Reuptake Inhibitors (SNRIs) are commonly prescribed medications for panic disorder. They can help reduce the frequency
                    and severity of panic attacks.</li>
                <li><strong>Benzodiazepines:</strong> These medications are used in some cases for short-term relief of severe panic attacks
                    but are typically not recommended for long-term use due to the risk of dependence.</li>
            </ul>
        </li>
        <li><strong>Relaxation Techniques:</strong> Learning relaxation techniques such as deep breathing, progressive muscle relaxation,
            and mindfulness can help individuals manage anxiety and reduce the severity of panic attacks.</li>
        <li><strong>Lifestyle Changes:</strong> Maintaining a healthy lifestyle, including regular exercise, a balanced diet, adequate sleep,
            and stress management, can complement other treatments and reduce the risk of panic attacks.</li>
        <li><strong>Support Groups:</strong> Joining support groups or therapy groups for individuals with panic disorder can provide emotional
            support, share coping strategies, and reduce feelings of isolation.</li>
        <li><strong>Self-Help Strategies:</strong> Self-help resources, such as books, online courses, and mobile apps, can provide guidance
            and techniques for managing panic disorder.</li>
        <li><strong>Psychodynamic Psychotherapy:</strong> In some cases, psychodynamic therapy may be used to explore underlying emotional
            issues that contribute to panic attacks.</li>
    </ul>

    <p>It's important to note that treatment for panic disorder should be individualized, and what works best may vary from person to person.
        Many individuals benefit from a combination of therapies, such as CBT and medication. Additionally, early intervention is essential
        for managing panic disorder effectively.</p>

    <p>If you or someone you know is struggling with panic disorder, seeking help from a mental health professional, such as a psychologist
        or psychiatrist, is crucial. They can assess the severity of the condition and develop a personalized treatment plan to address the
        specific needs and challenges associated with panic disorder. With appropriate treatment and support, individuals with panic disorder
        can experience significant relief from their symptoms and an improved quality of life.</p>
      </div>
  );
};

export default PanicDisorder;
