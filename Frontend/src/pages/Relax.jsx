import React from 'react';
import CalmingVideosSlider from './CalmingVideosSlider';
import SleepStories from './SleepStories';
import MeditationResources from './MeditationResources';

const Relax = () => {
  return (
    <div className="relax-page">
      <CalmingVideosSlider />
      <SleepStories />
      <MeditationResources />
    </div>
  );
};

export default Relax;
