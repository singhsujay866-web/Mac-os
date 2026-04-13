import React from 'react'
import { Rnd } from 'react-rnd'
import "./windows.scss"
const MacWindows = ({children}) => {
  return (
   <Rnd
    default={{
        x: 100,
        y: 100,
        width: 500,
        height: 400,
      }}>
    <div className="windows">
        <div className="nav">
            <div className="dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
            </div>
            <div className="title">
                <p>sujaysingh - zsh</p>
            </div>
        </div>
        <div className="main-content">
            {children}
        </div>
    </div>
   </Rnd>
  )
}

export default MacWindows
