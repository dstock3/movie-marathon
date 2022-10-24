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
import DateView from './components/modals/DateView';

export type ResponseDataType = {
    Response: boolean,
    Search: Array<object>,
    totalResults: string
}

const App = () => {
  const theme = useContext(ThemeContext)
  const [user, setUser] = useState(dummyData.users[3])
  const [isExpanded, setIsExpanded] = useState<boolean>(true)
  const [primeStyle, setPrimeStyle] = useState({})
  const [responseData, setResponseData] = useState<ResponseDataType | null>(null)
  const [dateViewEnabled, setDateViewEnabled] = useState<{"isOpen": boolean, "id": number | null}>({"isOpen": false, "id": null})
  
  /* setting light as the default theme for the time being */
  const [thisStyle, setThisStyle] = useState({ 
    backgroundColor: theme.light.main, 
    color: theme.light.text 
  })

  useEffect(()=> {
    let AppArray = Array.from(document.getElementsByClassName('App') as HTMLCollectionOf<HTMLElement>)
    let App = AppArray[0]
    App.style.transition = "all 0.25s ease-out"

    if (dateViewEnabled.isOpen) {
      if (App) {
        App.style.opacity = ".5"
      }
    } else {
      App.style.opacity = "1"
    }
  }, [dateViewEnabled])

  useEffect(()=> {
    let themes = Object.keys(theme)
    if (user) {
      for (let i = 0; i < themes.length; i++) {
        if (themes[i] === user.theme) {
          
          let thisTheme: any = theme[themes[i] as keyof Object]

          setThisStyle({ backgroundColor: thisTheme.main, color: thisTheme.text })  
        }
      }
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

            <Main thisStyle={thisStyle} thisUser={user} responseData={responseData} setDateViewEnabled={setDateViewEnabled} />

            <Footer thisStyle={thisStyle} thisUser={user} />
          </section>
      </div>
      {!isExpanded ? <ToggleSidebar thisStyle={thisStyle} thisUser={user} isExpanded={isExpanded} setIsExpanded={setIsExpanded} /> : null}
      {dateViewEnabled.isOpen ? <DateView dateViewEnabled={dateViewEnabled} thisStyle={thisStyle} thisUser={user} setDateViewEnabled={setDateViewEnabled} /> : null}
    </>
  );
}

export default App;
