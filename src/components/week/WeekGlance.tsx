import React, { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { WeekGlanceProps } from '../../Types.types'
import '../../style/week-view.css'
import { format } from 'date-fns'

const WeekGlance = (props: WeekGlanceProps) => {
  const theme = useContext(ThemeContext)
  const [weekViewStyle, setWeekViewStyle] = useState<React.CSSProperties | Object>({})
  const [dayStyle, setDayStyle] = useState<React.CSSProperties | Object>({})
  
  const [thisWeek, setThisWeek] = useState<any>(
    {"Sunday": "", 
    "Monday": "", 
    "Tuesday": "", 
    "Wednesday": "",
    "Thursday": "",
    "Friday": "",
    "Saturday": ""
  })

  useEffect(()=> {
    let today = format(props.currentDate, 'MM/dd/y')
    let newWeek = thisWeek

    if (props.monthRange) {
      for (let i = 0; i < props.monthRange.length; i++) {
        if (props.monthRange[i].date === today) {
          for (let prop in newWeek) {
            if (prop === props.monthRange[i].day) {
              newWeek[prop] = props.monthRange[i].date  
            }
          }
        }
      }
    }
    setThisWeek(newWeek)
  }, [props.monthRange])

  useEffect(()=> {
    let themes = Object.keys(theme)
    if (props.thisUser) {
      for (let i = 0; i < themes.length; i++) {
        if (themes[i] === props.thisUser.theme) {
          
          let thisTheme: any = theme[themes[i] as keyof Object]

          setWeekViewStyle({...props.thisStyle, ...{borderBottom: thisTheme.border, borderTop: thisTheme.border}})
          setDayStyle({...props.thisStyle, ...{border: thisTheme.border}})
        }
      }
    }
  }, [props.thisUser, props.thisStyle])

  return (
    <div className="week-view" style={weekViewStyle}>
      <div className="week-view-day sunday" style={dayStyle}>
        <div className="week-label">Sunday</div>
        <div className="week-contents">
          {thisWeek.Sunday}
          
        </div>
      </div>
      <div className="week-view-day monday" style={dayStyle}>
        <div className="week-label">Monday</div>
        <div className="week-contents">
          {thisWeek.Monday}

        </div>
      </div>
      <div className="week-view-day tuesday" style={dayStyle}>
        <div className="week-label">Tuesday</div>
        <div className="week-contents">
          {thisWeek.Tuesday}

        </div>
      </div>
      <div className="week-view-day wednesday" style={dayStyle}>
        <div className="week-label">Wednesday</div>
        <div className="week-contents">
          {thisWeek.Wednesday}

        </div>
      </div>
      <div className="week-view-day thursday" style={dayStyle}>
        <div className="week-label">Thursday</div>
        <div className="week-contents">
          {thisWeek.Thursday}

        </div>
      </div>
      <div className="week-view-day friday" style={dayStyle}>
        <div className="week-label">Friday</div>
        <div className="week-contents">
          {thisWeek.Friday}

        </div>
      </div>
      <div className="week-view-day saturday" style={dayStyle}>
        <div className="week-label">Saturday</div>
        <div className="week-contents">
          {thisWeek.Saturday}

        </div>
      </div>
    </div>
  )
}

export default WeekGlance