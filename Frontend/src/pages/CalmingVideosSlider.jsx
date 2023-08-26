import React, { useState, useEffect } from 'react';
import './Relax.css';

const CalmingVideosSlider = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const apiKey = 'AIzaSyDuWSva2fdNUgxPP_T4ekzvN0vv9-jdyrk';
        const playlistId = 'PLFjximVveyNXGaGUy5t9y17gnKYkEFDW_';
        const maxResults = 10;

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data = await response.json();
        const videoItems = data.items.map(item => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.default.url,
        }));

        setVideos(videoItems);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="calming-videos-slider">
      <h2>Calming Videos</h2>
      <div className="video-list">
        {videos.map(video => (
          <div key={video.id} className="video-card" data-title={video.title}>
            <iframe
              width="500px"
              height="400px"
              src={`https://www.youtube.com/embed/${video.id}`}
              frameBorder="0"
              allowFullScreen
              title={video.title}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalmingVideosSlider;
