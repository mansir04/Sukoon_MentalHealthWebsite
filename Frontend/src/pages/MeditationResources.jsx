import React from 'react';
import './Relax.css';

const MeditationResources = () => {
  const resources = [
    {
      type: 'article',
      title: 'Mindfulness Meditation: Benefits and Techniques',
      link: 'https://greatergood.berkeley.edu/article/item/five_ways_mindfulness_meditation_is_good_for_your_health',
      gifLink: 'https://skyogafoundation.org/assets/images/silence.gif',
    },
    {
      type: 'article',
      title: '8 Simple Exercises for Stress Relief',
      link: 'https://www.everydayhealth.com/exercise-photos/exercises-that-relieve-stress.aspx',
      gifLink: 'https://media2.giphy.com/media/lSodnhEO8lphSsxEUy/giphy.gif',
    },
    {
      type: 'article',
      title: 'Beginner Yoga Poses for Relaxation',
      link: 'https://www.yogajournal.com/poses/yoga-by-benefit/calm/yoga-poses-for-relaxation/',
      gifLink: 'https://ub24news.com/wp-content/uploads/2019/06/source-min.gif',
    },
    {
      type: 'article',
      title: 'Beginner Yoga Poses for Relaxation',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1470658/',
      gifLink: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5bc49a55989429.599c07a9224c3.gif',
    },
    {
      type: 'article',
      title: 'Meditation for Slowing Thoughts',
      link: 'https://www.youtube.com/watch?v=79r4jlECyTs',
      gifLink: 'https://media4.giphy.com/media/Mb42X7rqa0H7YlJsiz/source.gif',
    },
  ];

  return (
    <div className="meditation-resources">
      <h2>Meditation, Yoga, Exercises and more...</h2>
      <div className="resource-slider" >
        {resources.map(resource => (
          <div key={resource.link} className="resource-card" resource-title={resource.title}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              <img src={resource.gifLink} alt={resource.title} />
              <h3>{resource.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeditationResources;
