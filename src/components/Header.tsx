import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

const Header = () => {
  const theme = useContext(ThemeContext)
  
  return (
    <header 
      className="head-menu" 
      style={{ 
      backgroundColor: theme.dark.main, 
      color: theme.dark.text }}>
        Header
      
    </header>
  )
}

export default Header