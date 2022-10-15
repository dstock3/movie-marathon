import React, { useState, useEffect, useContext, Dispatch, SetStateAction } from 'react'
import { ThemeContext } from '../components/context/ThemeContext'
import '../style/sidebar.css'

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
        let darkRightBorder = {"borderRight": theme.dark.border}
        let lightRightBorder = {"borderRight": theme.light.border}
    
        if (props.thisUser) {
          if (props.thisUser.theme === "dark") {
            setSidebarStyle({...sidebarStyle, ...darkRightBorder, ...props.thisStyle})
            setHideButton({...props.thisStyle, ...{"border": theme.dark.border}})
          } else if (props.thisUser.theme === "light") {
            setSidebarStyle({...sidebarStyle, ...lightRightBorder, ...props.thisStyle})
            setHideButton({...props.thisStyle, ...{"border": theme.light.border}})
          }
        }
    }, [props.thisUser, props.thisStyle])

    useEffect(()=> {
        let expandedWidth ={"width":"20vw"}
        let compressed = {"width":0, "visibility":"collapse"}

        if (props.isExpanded) {
            setSidebarStyle({...sidebarStyle, ...expandedWidth})
        } else {
            setSidebarStyle({...sidebarStyle, ...compressed})
        }

    }, [props.isExpanded])

    return (
        <section className="sidebar" style={sidebarStyle}>
            <div className="hide-button" style={hideButton} onClick={() => props.setIsExpanded(!props.isExpanded)}>
                Hide
            </div>
            
        </section>
    )
}

export default Sidebar