import React from 'react';

const Background = ({ theme }) => {
  if (theme.type === 'video') {
    return (
      <video autoPlay loop muted playsInline className="background-video">
        <source src={theme.url} type="video/mp4" />
      </video>
    );
  }

  return (
    <div 
      className="background-image" 
      style={{ backgroundImage: `url(${theme.url})` }}
    />
  );
};

export default Background;