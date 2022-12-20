import { useEffect, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../../style/calendar.css'
import { ControllerProps } from '../../Types.types'

const CalendarController = (props: ControllerProps) => {
    const theme = useContext(ThemeContext)
    
    useEffect(()=> {
      let themes = Object.keys(theme)
      if (props.thisUser) {
        let forward = document.getElementById("forward")
        let back = document.getElementById("back")
        for (let i = 0; i < themes.length; i++) {
          if (themes[i] === props.thisUser.theme) {
            let thisTheme: any = theme[themes[i] as keyof Object]

            forward?.setAttribute("fill", thisTheme.text)
            back?.setAttribute("fill", thisTheme.text)
          }
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

            <h2 className="month no-select">{props.currentMonth + " " + props.currentYear}</h2>

            <div className="forward" onClick={()=>props.changeMonth("forward")}>
                <svg className="forward-icon" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                    <path id="forward" d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"/>
                </svg>
            </div>
        </div>
    )
}

export default CalendarController