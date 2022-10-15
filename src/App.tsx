import React, { useEffect, useState } from 'react';
import { useContext } from 'react'
import { ThemeContext } from './components/context/ThemeContext'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import dummyData from './dummyData.json'
import Sidebar from './components/Sidebar';

const App = () => {
  const theme = useContext(ThemeContext)
  const [user, setUser] = useState(dummyData.users[0])
  const [isExpanded, setIsExpanded] = useState(true)
  const [primeStyle, setPrimeStyle] = useState({})

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

  useEffect(()=> {
    if (isExpanded) {
      setPrimeStyle({"width":"80vw"})
    } else {
      setPrimeStyle({"width":"100vw"})
    }
  }, [isExpanded])

  return (
    <div 
      className="App" 
      style={thisStyle}>
        <Sidebar thisStyle={thisStyle} thisUser={user} isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <section className={`primary`} style={primeStyle}>
          <Header thisStyle={thisStyle} thisUser={user} />

          <Main thisStyle={thisStyle} thisUser={user} />

          <Footer thisStyle={thisStyle} thisUser={user} />
        </section>
    </div>
  );
}

export default App;
