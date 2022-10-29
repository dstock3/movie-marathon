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

export type DateViewEnabledType = {
  "isOpen": boolean, 
  "id": number | null
}

const App = () => {
  const theme = useContext(ThemeContext)
  const [user, setUser] = useState(dummyData.users[2])
  const [isExpanded, setIsExpanded] = useState<boolean>(true)
  const [primeStyle, setPrimeStyle] = useState({})
  const [responseData, setResponseData] = useState<ResponseDataType | null>(null)
  const [dateViewEnabled, setDateViewEnabled] = useState<DateViewEnabledType>({"isOpen": false, "id": null})
  
  const [thisStyle, setThisStyle] = useState({ })
  const [appStyle, setAppStyle] = useState(thisStyle)

  useEffect(()=> {
    let AppArray = Array.from(document.getElementsByClassName('App') as HTMLCollectionOf<HTMLElement>)
    let App = AppArray[0]
    
    let themes = Object.keys(theme)

    if (dateViewEnabled.isOpen) {
      if (App && user) {
        for (let i = 0; i < themes.length; i++) {
          if (themes[i] === user.theme) {
            
            let thisTheme: any = theme[themes[i] as keyof Object]
            
            setAppStyle({
              ...appStyle, 
              ...{
                backgroundColor: thisTheme.fade,
                transform: "scale(1.01)",
                WebkitFilter: "blur(5px)", 
                filter: "blur(5px)",
              }
            })
          }
        }
      }
    } else {
      if (user) {
        for (let i = 0; i < themes.length; i++) {
          if (themes[i] === user.theme) {
            let thisTheme: any = theme[themes[i] as keyof Object]
  
            setAppStyle({ 
              ...appStyle, 
              ...{ 
                backgroundColor: thisTheme.main, 
                filter: "unset", 
                WebkitFilter: "unset",
                transform: "scale(1)" 
            }})  
          }
        }
      }
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
        style={appStyle}>
          <Sidebar thisStyle={thisStyle} thisUser={user} isExpanded={isExpanded} setIsExpanded={setIsExpanded} setResponseData={setResponseData} />
          <section className={`primary`} style={primeStyle}>
            <Header thisStyle={thisStyle} thisUser={user} setResponseData={setResponseData} />

            <Main thisStyle={thisStyle} thisUser={user} responseData={responseData} dateViewEnabled={dateViewEnabled} setDateViewEnabled={setDateViewEnabled} />

            <Footer thisStyle={thisStyle} thisUser={user} />
          </section>
      </div>
      {!isExpanded ? <ToggleSidebar thisStyle={thisStyle} thisUser={user} isExpanded={isExpanded} setIsExpanded={setIsExpanded} /> : null}
    </>
  );
}

export default App;
