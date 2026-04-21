import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MacWindows from './MacWindows'
import "./Note.scss"
const Note = ({windowsName, setwindowsState}) => {
    const [markdown, setmarkdown] = useState(null)

    useEffect(() => {
        fetch("./note.txt")
            .then(res => res.text())
            .then(text => setmarkdown(text))
    }, [])
    return (
        <div>
            <MacWindows windowsName={windowsName} setwindowsState={setwindowsState}>
                <div className='note-window'>
                    {markdown ? <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
                        {markdown}
                    </SyntaxHighlighter> : <p>Loading...</p>}
                </div>
            </MacWindows>
        </div>
    )
}

export default Note
