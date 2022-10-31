import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../../style/footer.css'

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
    let gitPath = document.getElementById("github-path")
    let codePath = document.getElementById("code-path") 
    let codePath2 = document.getElementById("code-path-2")
    
    let themes = Object.keys(theme)
    if (props.thisUser) {
      for (let i = 0; i < themes.length; i++) {
        if (themes[i] === props.thisUser.theme) {
          
          let thisTheme: any = theme[themes[i] as keyof Object]

          setFootStyle({...footStyle, ...{"borderTop": thisTheme.border}, ...props.thisStyle})

          gitPath?.setAttribute("fill", thisTheme.text)
          codePath?.setAttribute("fill", thisTheme.main)
          codePath2?.setAttribute("fill", thisTheme.text)
        }
      }
    }
  }, [props.thisUser, props.thisStyle])



  return (
    <footer className="main-footer" style={footStyle} >
      <div className="attribution">
          FilmStack was created by David Stockdale.
      </div>
      <div className="social-links">
          <a className="social-link" href="https://github.com/dstock3" target="_blank" rel="noopener noreferrer">
            <svg className="github-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path id="github-path" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a className="social-link" href="https://davestockdale.io/" target="_blank" rel="noopener noreferrer">
            <svg className="code-icon" xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0V0z" id="code-path"/>
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" id="code-path-2"/>
            </svg>
          </a>
      </div>
    </footer>
  )
}

export default Footer