import React, { useState, useEffect } from 'react'
import './darkmode.css'

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode)
  }, [isDarkMode])

  return (
    <div className='dark-mode-toggle' onClick={toggleDarkMode}>
      {isDarkMode ? 'Light' : 'Dark'}
    </div>
  )
}

export default DarkMode
