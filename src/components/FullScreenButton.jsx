import React, { useEffect, useState } from 'react'
import './FullScreenButton.scss'

const FullScreenButton = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  useEffect(() => {
    const updateFullScreenState = () => {
      setIsFullScreen(Boolean(document.fullscreenElement))
    }

    document.addEventListener('fullscreenchange', updateFullScreenState)
    updateFullScreenState()

    return () => {
      document.removeEventListener('fullscreenchange', updateFullScreenState)
    }
  }, [])

  const toggleFullScreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch (error) {
      console.error('Fullscreen toggle failed:', error)
    }
  }

  return (
    <button
      className={`fullscreen-button ${isFullScreen ? 'active' : ''}`}
      type="button"
      onClick={toggleFullScreen}
      aria-label={isFullScreen ? 'Exit full screen' : 'Enter full screen'}
    >
      <img
        src="/navbar-icons/fullscreen.svg"
        alt="Full screen"
        className="fullscreen-icon"
      />
    </button>
  )
}

export default FullScreenButton
