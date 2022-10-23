import React, { useEffect, useState } from 'react';
import { useContext } from 'react'
import { ThemeContext } from './components/context/ThemeContext'
import './App.css';
import Header from './components/basic/Header';
import Main from './components/basic/Main';
import Footer from './components/basic/Footer';
import dummyData from './dummyData.json'
import Sidebar from './components/basic/Sidebar';
import ToggleSidebar from './components/modals/ToggleSidebar';

export type ResponseDataType = {
    Response: boolean,
    Search: Array<object>,
    totalResults: string
}

const App = () => {
  const theme = useContext(ThemeContext)
  const [user, setUser] = useState(dummyData.users[1])
  const [isExpanded, setIsExpanded] = useState(true)
  const [primeStyle, setPrimeStyle] = useState({})
  const [responseData, setResponseData] = useState<ResponseDataType | null>(null)

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
    } else if (user.theme === "mint") {
      setThisStyle({ backgroundColor: theme.mint.main, color: theme.mint.text }) 
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
    <>
      <div 
        className="App" 
        style={thisStyle}>
          <Sidebar thisStyle={thisStyle} thisUser={user} isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          <section className={`primary`} style={primeStyle}>
            <Header thisStyle={thisStyle} thisUser={user} setResponseData={setResponseData} />

            <Main thisStyle={thisStyle} thisUser={user} responseData={responseData} />

            <Footer thisStyle={thisStyle} thisUser={user} />
          </section>
      </div>
      {!isExpanded ? <ToggleSidebar thisStyle={thisStyle} thisUser={user} isExpanded={isExpanded} setIsExpanded={setIsExpanded} /> : null}
    </>
  );
}

export default App;
