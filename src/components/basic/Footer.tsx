import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

type FooterProps = {
    thisStyle: React.CSSProperties,
    thisUser?: {
      handle: string,
      login: string,
      theme: string,
    }
}

const Footer = (props: FooterProps) => {
  const theme = useContext(ThemeContext)
  const [footStyle, setFootStyle] = useState({})

  useEffect(()=> {
    let themes = Object.keys(theme)
    if (props.thisUser) {
      for (let i = 0; i < themes.length; i++) {
        if (themes[i] === props.thisUser.theme) {
          
          let thisTheme: any = theme[themes[i] as keyof Object]

          setFootStyle({...footStyle, ...{"borderTop": thisTheme.border}, ...props.thisStyle})
        }
      }
    }
  }, [props.thisUser, props.thisStyle])

  return (
    <footer className="main-footer" style={footStyle} >
        
    </footer>
  )
}

export default Footer