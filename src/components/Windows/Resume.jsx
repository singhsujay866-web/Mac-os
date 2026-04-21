import React from 'react'
import MacWindows from './MacWindows'
import "./resume.scss"
const Resume = ({windowsName, setwindowsState}) => {
  return (
    <div>
      <MacWindows windowsName={windowsName} setwindowsState={setwindowsState}>
        <div className='resume-window'>
            <embed src="./resume.pdf" frameborder="0"></embed>
        </div>
      </MacWindows>
    </div>
  )
}

export default Resume
