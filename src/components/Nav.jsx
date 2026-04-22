import React from 'react'
import "./Nav.scss"
import Date from './Date'
import FullScreenButton from './FullScreenButton'


const Nav = ({ onLogoClick, windowsName, setwindowsState}) => {
  return (
    <nav>
        <div className="left-nav">
           <div className="nav-icon" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
                <img src="/navbar-icons/apple.svg" />
            </div>
            <div
             onClick={() => { setwindowsState(state => ({ ...state, note: !state.note })) }}
            style={{ cursor: 'pointer' }}
            >
                <p>Sujay Singh</p>
            </div>
            <div
             onClick={() => { setwindowsState(state => ({ ...state, resume: !state.resume })) }}
            style={{ cursor: 'pointer' }}
            >
                <p>File</p>
            </div>
            <div>
                <p>Window</p>
            </div>
            <div 
            onClick={() => { setwindowsState(state => ({ ...state, cli: !state.cli })) }}
            style={{ cursor: 'pointer' }}
            >
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
