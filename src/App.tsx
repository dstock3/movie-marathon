import React, { useEffect, useState, useMemo } from 'react';
import { useContext } from 'react'
import { ThemeContext } from './components/context/ThemeContext'
import './App.css';
import Header from './components/basic/Header';
import Main from './components/basic/Main';
import Footer from './components/basic/Footer';
import dummyData from './dummyData.json'
import Sidebar from './components/basic/Sidebar';
import { ResponseDataType, DateViewEnabledType, ThisUser } from './Types.types'
import Hero from './components/basic/Hero';
import ModalController from './components/controller/ModalController';

// App is responsible for managing the overall layout and functionality of the web application, and rendering the various components that make up the user interface.

const App = () => {
  const theme = useContext(ThemeContext)
  const [user, setUser] = useState<ThisUser | null>(dummyData.users[3])
  const [isExpanded, setIsExpanded] = useState<boolean>(true)
  const [primeStyle, setPrimeStyle] = useState({})
  const [responseData, setResponseData] = useState<ResponseDataType | null>(null)
  const [dateViewEnabled, setDateViewEnabled] = useState<DateViewEnabledType>({"isOpen": false, "id": null, "date": null, "movie": null})
  const [thisStyle, setThisStyle] = useState({ })
  const [appStyle, setAppStyle] = useState(thisStyle)
  const [page, setPage] = useState<string>("calendar")
  const [timeToPost, setTimeToPost] = useState<boolean>(false)

  useEffect(()=> {
    let AppArray = Array.from(document.getElementsByClassName('App') as HTMLCollectionOf<HTMLElement>)
    let App = AppArray[0]
    
    let themes = Object.keys(theme)

    if (dateViewEnabled.isOpen || timeToPost) {
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
  }, [dateViewEnabled, timeToPost])

  const memoizedStyle = useMemo(() => {
    let themes = Object.keys(theme);
    if (user) {
      for (let i = 0; i < themes.length; i++) {
        if (themes[i] === user.theme) {
          let thisTheme: any = theme[themes[i] as keyof Object];
          return { backgroundColor: thisTheme.main, color: thisTheme.text };
        }
      }
    }
    return {};
  }, [user, theme]);
  
  useEffect(() => {
    setThisStyle(memoizedStyle);
  }, [memoizedStyle]);
  
  const memoizedPrimeStyle = useMemo(() => {
    return isExpanded ? {"width":"80vw"} : {"width":"100vw"};
  }, [isExpanded]);
  
  useEffect(() => {
    setPrimeStyle(memoizedPrimeStyle);
  }, [memoizedPrimeStyle]);

  return (
    <div 
      className="App" 
      style={appStyle}>
        {!user && <Hero />}
        {user && (
          <React.Fragment>
            <Sidebar
              page={page}
              setPage={setPage}
              thisStyle={thisStyle}
              thisUser={user}
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
              setResponseData={setResponseData}
              setTimeToPost={setTimeToPost}
            />
            <div className={`primary`} style={primeStyle}>
              <Header
                thisStyle={thisStyle}
                thisUser={user}
                setResponseData={setResponseData}
              />

              <Main
                users={dummyData.users}
                page={page}
                setPage={setPage}
                thisStyle={thisStyle}
                thisUser={user}
                responseData={responseData}
                dateViewEnabled={dateViewEnabled}
                setDateViewEnabled={setDateViewEnabled}
              />

              <Footer thisStyle={thisStyle} thisUser={user} />
            </div>
          </React.Fragment>
        )}

        <ModalController 
          thisStyle={thisStyle} 
          thisUser={user} 
          isExpanded={isExpanded} 
          setIsExpanded={setIsExpanded} 
          timeToPost={timeToPost} 
          setTimeToPost={setTimeToPost} 
        />
    </div>
  );
}

export default App;
