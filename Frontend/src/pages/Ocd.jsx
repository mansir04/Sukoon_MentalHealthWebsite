import React, { useState } from 'react';

const Ocd = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://www.therecoveryvillage.com/wp-content/uploads/2022/04/1-OCD-Statistics.webp',
    'https://www.kff.org/wp-content/uploads/2023/03/share-of-adults-reporting-symptoms-of-anxiety-and-or-depressive-disorder-february-2023-Feature-image-v2-2.png',
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="mental-illness-page">
      <h2>Obsessive-Compulsive Disorder (OCD)</h2>

      <div className="image-container">
        <button className="arrow-button prev-button" onClick={previousImage}>
          &larr;
        </button>
        <img src={images[currentImage]} alt="Depression" />
        <button className="arrow-button next-button" onClick={nextImage}>
          &rarr;
        </button>
      </div>

      <p>Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by the presence of obsessions and
        compulsions. Obsessions are intrusive, distressing, and persistent thoughts, images, or urges that cause anxiety
        or distress. Compulsions are repetitive behaviors or mental acts that an individual feels compelled to perform in
        response to the obsessions, often as a way to reduce the distress associated with them.</p>

    <h2>Symptoms of OCD:</h2>
    <ul>
        <li>Obsessions: Common obsessions in OCD may include fears of contamination, fears of harm coming to oneself or
            others, concerns about order or symmetry, and unwanted taboo thoughts or images.</li>
        <li>Compulsions: Compulsions are the repetitive behaviors or mental acts performed in response to the obsessions.
            Examples include excessive handwashing, checking locks repeatedly, counting, or mentally repeating certain
            phrases.</li>
    </ul>

    <h2>Treatment for OCD:</h2>
    <p>OCD is a treatable condition, and several effective treatment options are available:</p>
    <ol>
        <li><strong>Cognitive-Behavioral Therapy (CBT):</strong> CBT, particularly a specific form known as Exposure and
            Response Prevention (ERP), is considered the first-line treatment for OCD. In ERP, individuals are gradually
            exposed to their obsessional fears while learning to resist performing compulsive behaviors. Over time, this
            reduces the anxiety associated with obsessions.</li>
        <li><strong>Medications:</strong> Antidepressant medications, specifically Selective Serotonin Reuptake Inhibitors
            (SSRIs), are often prescribed to individuals with OCD. These medications can help reduce the severity of
            symptoms, although they may take several weeks to become fully effective.</li>
        <li><strong>Combination Therapy:</strong> Some individuals may benefit from a combination of CBT and medication.
            This approach can be particularly effective for those with severe or treatment-resistant OCD.</li>
        <li><strong>Mindfulness-Based Therapies:</strong> Mindfulness techniques, such as mindfulness-based cognitive
            therapy (MBCT) or mindfulness-based stress reduction (MBSR), may help individuals manage OCD symptoms by
            increasing their awareness and acceptance of obsessions without reacting compulsively.</li>
        <li><strong>Support Groups:</strong> Joining support groups or therapy groups with others who have OCD can provide
            emotional support, share coping strategies, and reduce feelings of isolation.</li>
        <li><strong>Deep Brain Stimulation (DBS):</strong> In rare and severe cases of treatment-resistant OCD, deep brain
            stimulation may be considered. It involves surgically implanting electrodes in the brain to modulate neural
            activity.</li>
        <li><strong>Lifestyle Changes:</strong> Maintaining a healthy lifestyle that includes regular exercise, a balanced
            diet, and stress management techniques can complement other treatment approaches and promote overall
            well-being.</li>
    </ol>

    <p>It's important to note that treatment plans for OCD should be individualized based on the severity of symptoms and
        the person's preferences. Seeking help from a mental health professional, such as a psychologist or psychiatrist,
        is crucial for accurate diagnosis and appropriate treatment planning. Early intervention can significantly improve
        the prognosis for individuals with OCD, allowing them to better manage their symptoms and improve their quality of
        life.</p>
      </div>
  );
};

export default Ocd;
