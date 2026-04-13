import React from 'react';
import { themes } from '../data/themes';

const Background = ({ theme }) => {
  return (
    <>
      {themes.map((t) => (
        <div
          key={t.id}
          style={{
            position: 'fixed', inset: 0,
            opacity: t.id === theme.id ? 1 : 0,
            transition: 'opacity 0.4s ease',
            zIndex: -1,
          }}
        >
          {t.type === 'video' ? (
            <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
              <source src={t.url} type="video/mp4" />
            </video>
          ) : (
            <div style={{
              width: '100%', height: '100%',
              backgroundImage: `url(${t.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
          )}
        </div>
      ))}
    </>
  );
};

export default Background;