import React, { useState, useEffect } from 'react';

const SleepStories = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const fetchVideosData = async () => {
      try {
        const youtubeApiKey = 'AIzaSyDuWSva2fdNUgxPP_T4ekzvN0vv9-jdyrk';
        const playlistId = 'PLZoDGrriQgsLsklfcYf0U0FgHBWzJrfAI';
        const maxResults = 20;

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${youtubeApiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data = await response.json();
        const videos = data.items.map(item => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.default.url,
        }));

        setVideoList(videos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideosData();
  }, []);

  return (
    <div className="calming-videos-slider">
      <h2>SleepTime Stories</h2>
      <div className="video-list">
        {videoList.map(video => (
          <div key={video.id} className="video-card" data-title={video.title}>
            <iframe
              width="500px"
              height="300px"
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

export default SleepStories;
