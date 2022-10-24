import React, { useState, useEffect, useContext, Dispatch, SetStateAction } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../../style/sidebar.css'

type SidebarProps = {
    thisStyle: React.CSSProperties,
    thisUser?: {
      handle: string,
      login: string,
      theme: string,
    },
    isExpanded: boolean,
    setIsExpanded: Dispatch<SetStateAction<boolean>>
}

const Sidebar = (props: SidebarProps) => {
    const theme = useContext(ThemeContext)
    const [sidebarStyle, setSidebarStyle] = useState({})
    const [hideButton, setHideButton] = useState({})

    useEffect(()=> {
      let themes = Object.keys(theme)
      if (props.thisUser) {
        for (let i = 0; i < themes.length; i++) {
          if (themes[i] === props.thisUser.theme) {
            
            let thisTheme: any = theme[themes[i] as keyof Object]

            setSidebarStyle({...sidebarStyle, ...{"borderRight": thisTheme.border}, ...props.thisStyle})
            setHideButton({...props.thisStyle, ...{"border": thisTheme.border}})
          }
        }
      }
    }, [props.thisUser, props.thisStyle])

    useEffect(()=> {
        let expandedWidth ={"width":"20vw", "visibility":"visible"}
        let compressed = {"width":0, "visibility":"collapse"}

        if (props.isExpanded) {
            setSidebarStyle({...sidebarStyle, ...expandedWidth})
        } else {
            setSidebarStyle({...sidebarStyle, ...compressed})
        }

    }, [props.isExpanded])

    return (
        <section className="sidebar" style={sidebarStyle}>
          <div className="week-view-option">
            Week at a Glance
          </div>
          
          <div className="hide-button" style={hideButton} onClick={() => props.setIsExpanded(!props.isExpanded)}>
              Hide
          </div>
            
        </section>
    )
}

export default Sidebar