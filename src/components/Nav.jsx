import React from 'react'
import "./Nav.scss"
import Date from './Date'
import FullScreenButton from './FullScreenButton'


const Nav = ({ onLogoClick }) => {
  return (
    <nav>
        <div className="left-nav">
           <div className="nav-icon" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
                <img src="/navbar-icons/apple.svg" />
            </div>
            <div>
                <p>Sujay Singh</p>
            </div>
            <div>
                <p>File</p>
            </div>
            <div>
                <p>Window</p>
            </div>
            <div>
                <p>Terminal</p>
            </div>
        </div>

        <div className="right-nav">
            <div>
                <FullScreenButton />
            </div>
            
            <div>
                <img src="/navbar-icons/wifi.svg" />
            </div>
            <div>
                <Date />
            </div>
        </div>
    </nav>
  )
}

export default Nav
