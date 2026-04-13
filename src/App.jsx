import React, { useState } from 'react'
import "./App.scss"
import { themes } from './data/themes'
import Background from './components/Background'
import Nav from './components/Nav'
import Dock from './components/Dock'
import MacWindows from './components/Windows/MacWindows'
import Github from './components/Windows/Github'
import Loading from './components/Loading'

const App = () => {
  const [themeIndex, setThemeIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const currentTheme = themes[themeIndex];

  const toggleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

   if (isLoading) return <Loading onDone={() => setIsLoading(false)} />;


  return (
   <main>
    <Background theme={currentTheme} />
    <Nav onLogoClick={toggleTheme} />
    <Dock />
    <Github />
   </main>
  )
}

export default App