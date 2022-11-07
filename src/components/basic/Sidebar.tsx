import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../../style/sidebar.css'
import SearchBar from '../SearchBar'
import { SidebarProps } from '../../Types.types'
import ToolBar from '../tools/ToolBar'

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
      if (props.page) {
        let options = Array.from(document.getElementsByClassName("sidebar-option"))
        
        for (let i = 0; i < options.length; i++) {
          options[i].classList.remove("sidebar-selected")
        }

        let pageOption = document.getElementById(`${props.page}-option`)
        pageOption?.classList.add("sidebar-selected")

      }
    }, [props.page])

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
          <div className="sidebar-head-container">
            <div className="sidebar-head">
              <h1>FilmStack</h1>
              <div className="hide-button" style={hideButton} onClick={() => props.setIsExpanded(!props.isExpanded)}>
                Hide
              </div>
            </div>
            <SearchBar thisStyle={props.thisStyle} thisUser={props.thisUser} setResponseData={props.setResponseData}/>
          </div>

          <ToolBar thisStyle={props.thisStyle} thisUser={props.thisUser} />

          <ul className="sidebar-options">
            <li className="sidebar-option no-select" id="calendar-option" onClick={()=>props.setPage("calendar")}>
              Calendar
            </li>
            <li className="sidebar-option no-select" id="feed-option" onClick={()=>props.setPage("feed")}>
              Your Feed
            </li>
            <li className="sidebar-option no-select" id="week-option" onClick={()=>props.setPage("week")}>
              Week at a Glance
            </li>
            <li className="sidebar-option no-select" id="fav-option" onClick={()=>props.setPage("fav")}>
              Favorites
            </li>
            <li className="sidebar-option no-select" id="upcoming-option" onClick={()=>props.setPage("upcoming")}>
              Upcoming Stacks
            </li>
          </ul>
        </section>
    )
}

export default Sidebar