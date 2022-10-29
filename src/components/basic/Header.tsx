import React, { useEffect, useState, useContext, Dispatch, SetStateAction } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../../style/header.css'
import { ResponseDataType } from "../../App"

type HeaderProps = {
  thisStyle: React.CSSProperties,
  thisUser?: {
    handle: string,
    login: string,
    theme: string,
    metadataIsAllowed: boolean,
    searchData: Array<string>
  },
  setResponseData: Dispatch<SetStateAction<ResponseDataType | null>>
}

const Header = (props: HeaderProps) => {
  const theme = useContext(ThemeContext)
  const [headStyle, setHeadStyle] = useState({})
  
  useEffect(()=> {
    let themes = Object.keys(theme)
    if (props.thisUser) {
      for (let i = 0; i < themes.length; i++) {
        if (themes[i] === props.thisUser.theme) {
          
          let thisTheme: any = theme[themes[i] as keyof Object]

          setHeadStyle({...headStyle, ...{"borderBottom": thisTheme.border}, ...props.thisStyle})
        }
      }
    }
  }, [props.thisUser, props.thisStyle])

  return (
    <header 
      className="head-menu" 
      style={headStyle}>
      
      {props.thisUser? 
        <div className="welcome">Welcome {props.thisUser.handle}!</div>: 
        <div className="welcome">Login to Access Features</div>}

      <div className="menu">Menu</div>
    </header>
  )
}

export default Header