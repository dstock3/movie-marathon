import React, { useEffect, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../../style/calendar-refactor.css'

type ControllerProps = {
    changeMonth: (directive: string) => void,
    currentMonth: string,
    thisStyle: React.CSSProperties,
    thisUser?: {
      handle: string,
      login: string,
      theme: string,
    }
}

const CalendarController = (props: ControllerProps) => {
    const theme = useContext(ThemeContext)
    
    useEffect(()=> {
        if (props.thisUser) {
          let forward = document.getElementById("forward")
          let back = document.getElementById("back")
          if (props.thisUser.theme === "dark" && forward && back) {
            forward.setAttribute("fill", theme.dark.text)
            back.setAttribute("fill", theme.dark.text)
          } else if (props.thisUser.theme === "light" && forward && back) {
            forward.setAttribute("fill", theme.light.text)
            back.setAttribute("fill", theme.light.text)
          } else if (props.thisUser.theme === "mint" && forward && back) {
            forward.setAttribute("fill", theme.mint.text)
            back.setAttribute("fill", theme.mint.text)
          }
        }
      }, [props.thisUser, props.thisStyle])

    return (
        <div className="calendar-controller">
            <div className="back" onClick={()=>props.changeMonth("back")}>
                <svg className="back-icon" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                    <path id="back" d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"/>
                </svg>
            </div>

            <h2 className="month">{props.currentMonth}</h2>

            <div className="forward" onClick={()=>props.changeMonth("forward")}>
                <svg className="forward-icon" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                    <path id="forward" d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"/>
                </svg>
            </div>
        </div>
    )
}

export default CalendarController