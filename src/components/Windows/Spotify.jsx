import React from 'react'
import MacWindows from './MacWindows'
import "./spotify.scss"
const Spotify = ({ height = "50vh",width="25vw" }) => {
  return (
    <div style={{ height }}>
      <MacWindows height= {height} width={width} >
        <div className='spotify-window'>
           <iframe 
  src="https://open.spotify.com/embed/playlist/2muJsu4u9gne1SEZIz2tDa?utm_source=generator"
  width="100%" 
  height="100%"   
  frameBorder="0" 
  allow="autoplay; clipboard-write;  fullscreen; picture-in-picture" 
  loading="lazy"
/>
        </div>
      </MacWindows>
    </div>
  )
}

export default Spotify
