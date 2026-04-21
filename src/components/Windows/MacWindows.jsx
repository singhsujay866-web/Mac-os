import React from 'react'
import { Rnd } from 'react-rnd'
import "./windows.scss"
const MacWindows = ({ children, width = "30vw", height = "60vh" , windowsName,setwindowsState}) => {
    return (
        <Rnd
            default={{
                x: 100,
                y: 100,
                width: width,
                height: height,
            }}
            minWidth="280px"
            minHeight="350px"
        >
            <div className="windows">
                <div className="nav">
                    <div className="dots">
                        <div 
                        onClick={()=>{setwindowsState(state=>({...state,[windowsName]:false}))}}
                        className="dot red"></div>
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
