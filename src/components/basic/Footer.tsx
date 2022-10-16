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
    let darkTopBorder = {"borderTop": theme.dark.border}
    let lightTopBorder = {"borderTop": theme.light.border}

    if (props.thisUser) {
      if (props.thisUser.theme === "dark") {
        setFootStyle({...footStyle, ...darkTopBorder, ...props.thisStyle})
      } else if (props.thisUser.theme === "light") {
        setFootStyle({...footStyle, ...lightTopBorder, ...props.thisStyle})
      }
    }

  }, [props.thisUser, props.thisStyle])

  return (
    <footer className="main-footer" style={footStyle} >
        Footer
    </footer>
  )
}

export default Footer