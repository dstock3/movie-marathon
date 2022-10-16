import React, { useEffect, useState, useContext, Dispatch, SetStateAction } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../../style/header.css'
import SearchBar from '../SearchBar'
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
    let darkBottomBorder = {"borderBottom": theme.dark.border}
    let lightBottomBorder = {"borderBottom": theme.light.border}

    if (props.thisUser) {
      if (props.thisUser.theme === "dark") {
        setHeadStyle({...headStyle, ...darkBottomBorder, ...props.thisStyle})
      } else if (props.thisUser.theme === "light") {
        setHeadStyle({...headStyle, ...lightBottomBorder, ...props.thisStyle})
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

      <SearchBar thisStyle={props.thisStyle} thisUser={props.thisUser} setResponseData={props.setResponseData}/>

      <div className="menu">Menu</div>
    </header>
  )
}

export default Header