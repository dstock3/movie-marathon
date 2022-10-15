import React, { useEffect, useState } from 'react';
import { useContext } from 'react'
import { ThemeContext } from './components/context/ThemeContext'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import dummyData from './dummyData.json'

const App = () => {
  const theme = useContext(ThemeContext)
  const [user, setUser] = useState(dummyData.users[0])
  
  /* setting light as the default theme for the time being */
  const [thisStyle, setThisStyle] = useState({ 
    backgroundColor: theme.light.main, 
    color: theme.light.text 
  })

  useEffect(()=> {
    if (user.theme === "dark") {
      setThisStyle({ backgroundColor: theme.dark.main, color: theme.dark.text })  
    } else if (user.theme === "light") {
      setThisStyle({ backgroundColor: theme.light.main, color: theme.light.text }) 
    }
  }, [user])

  return (
    <div 
      className="main" 
      style={thisStyle}>

      <Header thisStyle={thisStyle} thisUser={user} />

      <Main thisStyle={thisStyle} thisUser={user} />

      <Footer thisStyle={thisStyle} thisUser={user} />

    </div>
  );
}

export default App;
