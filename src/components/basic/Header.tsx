import React, { useEffect, useState, useContext, useMemo } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../../style/header.css'
import { HeaderProps } from '../../Types.types'

const Header = (props: HeaderProps) => {
  const theme = useContext(ThemeContext)
  const [headStyle, setHeadStyle] = useState({})
  
  // Calculate the headStyle object using useMemo to optimize the calculation
  const headStyleCalculated = useMemo(() => {
    let styles: any = {}
    let themes = Object.keys(theme)
    let menuPath = document.getElementById("menu-path")

    if (props.thisUser) {
      for (let i = 0; i < themes.length; i++) {
        if (themes[i] === props.thisUser.theme) {
          
          let thisTheme: any = theme[themes[i] as keyof Object]

          styles = {...styles, ...{"borderBottom": thisTheme.border}, ...props.thisStyle}
          menuPath?.setAttribute("fill", thisTheme.text)
        }
      }
    }
    return styles
  }, [props.thisUser, props.thisStyle, theme])

  useEffect(() => {
    // Set the headStyle state with the calculated value
    setHeadStyle(headStyleCalculated)
  }, [headStyleCalculated])

  return (
    <header 
      className="head-menu" 
      style={headStyle}>
      
      {props.thisUser? 
        <div className="welcome">Welcome {props.thisUser.handle}!</div>: 
        <div className="welcome">Login to Access Features</div>}

      <div className="menu">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path id="menu-path" d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/>
          </svg>
      </div>
    </header>
  )
}

export default Header