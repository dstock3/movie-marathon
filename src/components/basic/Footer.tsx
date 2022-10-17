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

    if (props.thisUser) {
      if (props.thisUser.theme === "dark") {
        setFootStyle({...footStyle, ...{"borderTop": theme.dark.border}, ...props.thisStyle})
      } else if (props.thisUser.theme === "light") {
        setFootStyle({...footStyle, ...{"borderTop": theme.light.border}, ...props.thisStyle})
      } else if (props.thisUser.theme === "mint") {
        setFootStyle({...footStyle, ...{"borderTop": theme.mint.border}, ...props.thisStyle})
      }
    }

  }, [props.thisUser, props.thisStyle])

  return (
    <footer className="main-footer" style={footStyle} >
        
    </footer>
  )
}

export default Footer