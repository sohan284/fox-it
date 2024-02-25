// LiveVideoCard.js

import React from 'react';
import './LiveVedioCard.css'

const LiveVideoCard = ({videoEmbed }) => {
  return (
    <div className="live-video-card">
      <div className="video-container">
        {videoEmbed}
      </div>
    </div>
  );
};

export default LiveVideoCard;
