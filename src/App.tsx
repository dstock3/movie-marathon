import React from 'react';
import { useContext } from 'react'
import { ThemeContext, ThemeContextProvider } from './components/context/ThemeContext'
import './App.css';
import Header from './components/Header';

const App = () => {
  const theme = useContext(ThemeContext)

  return (
    <div 
      className="main" 
      style={{ 
        backgroundColor: theme.dark.main, 
        color: theme.dark.text }}>
    <ThemeContextProvider>
      <Header />
    </ThemeContextProvider>
    </div>
  );
}

export default App;
