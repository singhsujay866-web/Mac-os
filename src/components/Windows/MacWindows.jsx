import React, { useRef } from 'react'
import { Rnd } from 'react-rnd'
import "./windows.scss"

const MacWindows = ({ children, width = "30vw", height = "60vh", windowsName, setwindowsState }) => {
    const rndRef = useRef(null);

    const handleFullscreen = () => {
        const el = rndRef.current?.resizableElement?.current;
        if (!el) return;
        if (!document.fullscreenElement) {
            el.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    return (
        <Rnd
            ref={rndRef}
            default={{ x: 100, y: 100, width, height }}
            minWidth="280px"
            minHeight="350px"
        >
            <div className="windows">
                <div className="nav">
                    <div className="dots">
                        <div onClick={() => setwindowsState(state => ({...state, [windowsName]: false}))}
                            className="dot red" />
                        <div className="dot yellow" />
                        <div onClick={handleFullscreen}
                            className="dot green" />
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