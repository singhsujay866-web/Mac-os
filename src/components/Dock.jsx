import React from 'react'
import "./dock.scss"
import { resume } from 'react-dom/server'
const Dock = ({ windowsState, setwindowsState }) => {
    return (
        <footer className='dock'>
            <div
                onClick={() => { setwindowsState(state => ({ ...state, github: !state.github })) }}
                className='icon github'><img src="/Doc-icons/github.svg" alt="" /></div>
            <div 
            onClick={()=>{window.open("mailto:sujaysingh145@gmail.com","_blank")}}
            className='icon mail'><img src="/Doc-icons/mail.svg" alt="" /></div>
            <div
                onClick={() => { setwindowsState(state => ({ ...state, resume: !state.resume })) }}
                className='icon pdf'><img src="/Doc-icons/pdf.svg" alt="" /></div>
            <div
                onClick={() => { setwindowsState(state => ({ ...state, note: !state.note })) }}
                className='icon note'><img src="/Doc-icons/note.svg" alt="" /></div>
            <div
                onClick={() => { setwindowsState(state => ({ ...state, spotify: !state.spotify })) }}
                className='icon spotify'><img src="/Doc-icons/spotify.svg" alt="" /></div>
            <div 
            onClick={()=>{window.open("https://www.linkedin.com/in/sujay-singh-/" , "_blank")}}
            className='icon link'><img src="/Doc-icons/link.svg" alt="" /></div>
            <div
                onClick={() => { setwindowsState(state => ({ ...state, cli: !state.cli })) }}
                className='icon cli'><img src="/Doc-icons/cli.svg" alt="" /></div>
            <div 
            onClick={()=>{window.open("https://calendar.google.com/calendar/u/0/r","_blank")}}
            className='icon calender'><img src="/Doc-icons/calender.svg" alt="" /></div>


        </footer>
    )
}

export default Dock
