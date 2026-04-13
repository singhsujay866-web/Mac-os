import React, { useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Loading.scss';

const Loading = ({ onDone }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onDone(); 
    }, 3000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="loading-screen">
      <div className="loader-container">
        <DotLottieReact
          src="/Welcome.lottie"
          loop
          autoplay
          style={{ width: '700px', height: '700px' }}
        />
      </div>
    </div>
  );
};

export default Loading;