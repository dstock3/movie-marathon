import { useEffect, useState } from 'react';
import { useContext } from 'react'
import { ThemeContext } from './components/context/ThemeContext'
import './App.css';
import Header from './components/basic/Header';
import Main from './components/basic/Main';
import Footer from './components/basic/Footer';
import dummyData from './dummyData.json'
import Sidebar from './components/basic/Sidebar';
import ToggleSidebar from './components/modals/ToggleSidebar';
import { ResponseDataType, DateViewEnabledType, ThisUser } from './Types.types'
import Compose from './components/modals/Compose';
import Hero from './components/basic/Hero';

const App = () => {
  const theme = useContext(ThemeContext)
  const [user, setUser] = useState<ThisUser | null>(null)
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
    <div 
      className="App" 
      style={appStyle}>
        {!user ? 
          <Hero /> :
          <>
            <Sidebar page={page} setPage={setPage} thisStyle={thisStyle} thisUser={user} isExpanded={isExpanded} setIsExpanded={setIsExpanded} setResponseData={setResponseData} setTimeToPost={setTimeToPost} />
            <section className={`primary`} style={primeStyle}>
              <Header thisStyle={thisStyle} thisUser={user} setResponseData={setResponseData} />

              <Main users={dummyData.users} page={page} setPage={setPage} thisStyle={thisStyle} thisUser={user} responseData={responseData} dateViewEnabled={dateViewEnabled} setDateViewEnabled={setDateViewEnabled} />

              <Footer thisStyle={thisStyle} thisUser={user} />
            </section>
          </>
        }

        {!isExpanded ? <ToggleSidebar thisStyle={thisStyle} thisUser={user} isExpanded={isExpanded} setIsExpanded={setIsExpanded} /> : null}

        {timeToPost ? <Compose thisStyle={thisStyle} thisUser={user} setTimeToPost={setTimeToPost} /> : null}
    </div>
  );
}

export default App;
