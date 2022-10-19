import React, {useContext, useEffect, useState} from 'react'
import { format, eachDayOfInterval } from 'date-fns'
import '../../style/calendar.css'
import { ThemeContext } from '../context/ThemeContext'
import backIcon from '../../assets/back.svg'
import forwardIcon from '../../assets/forward.svg'

type CalendarProps = {
  thisStyle: React.CSSProperties,
  thisUser?: {
    handle: string,
    login: string,
    theme: string,
  },
  responseData: {
    Response: boolean,
    Search: Array<object>,
    totalResults: string,
  } | null,
}

const Calendar = (props: CalendarProps) => {
  const theme = useContext(ThemeContext)
  const [currentDate, setCurrentDate] = useState(String(new Date()))
  const [currentMonth, setCurrentMonth] = useState(String(format(new Date(), 'MMMM')))
  const [rangeofDates, setRangeOfDates] = useState<Array<Date> | null>(null)
  const [thisMonthDays, setThisMonthDays] = useState()
  const [monthRange, setMonthRange] = useState<Array<String> | null>()
  const [imgIconStyle, setImgIconStyle] = useState<React.CSSProperties>({"fill": theme.light.text})
  
  useEffect(()=> {
    const today = new Date(currentDate)

    const currentYear = format(today, 'y')

    const oneYearAgo = format(new Date(parseInt(format(new Date(), 'y')) - 1, parseInt(format(new Date(), 'MM')) - 1, parseInt(format(new Date(), 'dd'))), 'MM/dd/y')

    const oneYearFromToday = format(new Date(parseInt(format(new Date(), 'y')) + 1, parseInt(format(new Date(), 'MM')) - 1, parseInt(format(new Date(), 'dd'))), 'MM/dd/y')
    
    const thisRange = eachDayOfInterval({
      start: new Date(oneYearAgo),
      end: new Date(oneYearFromToday)
    })
    setRangeOfDates(thisRange)
    
    let monthArray = []
    for (let i = 0; i < thisRange.length; i++) {
      let thisDay = new Date(thisRange[i])
      let formattedThisYear = format(thisDay, 'y')
      let formattedThisMonth = format(thisDay, 'MMMM')
      
      if (formattedThisMonth === currentMonth &&
        currentYear === formattedThisYear) {
          monthArray.push(format(thisDay, 'MM/dd/y'))
      }
      
      setMonthRange(monthArray)
    }
  }, [currentMonth])

  const changeMonth = (directive: String) => {
    const currentYear = parseInt(format(new Date(), 'y'))
    
    let thisMonth = format(new Date(parseInt(format(new Date(), 'y')) - 1, parseInt(format(new Date(currentMonth + "1" + currentYear), 'MM')), parseInt(format(new Date(), 'dd'))), 'MM')

    console.log("refMonth: " +thisMonth)
    
    if (directive === "back") {
      let backOne = parseInt(thisMonth) - 1
      console.log("back one: " + backOne)
      let lastYear
      if (backOne === 12) lastYear = currentYear + 1
      setCurrentMonth(format(backOne, 'MMMM'))

    } else if (directive === "forward") {
      
      let forwardOne = parseInt(thisMonth) + 1
      let nextYear
      if (forwardOne === 1) nextYear = currentYear + 1
      console.log("forward one: " + forwardOne)
      setCurrentMonth(format(forwardOne, 'MMMM'))
    }
  }

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
    <div className="calendar-container">
      <div className="calendar-controller">
        <div className="back" onClick={()=>changeMonth("back")}>
          <svg className="back-icon" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path id="back" d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"/>
          </svg>
        </div>

        <h2 className="month">{currentMonth}</h2>

        <div className="forward" onClick={()=>changeMonth("forward")}>
          <svg className="forward-icon" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path id="forward" d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"/>
          </svg>
        </div>
      </div>
      
      <div className="calendar-grid">
        {monthRange ? monthRange.map((value, index)=> {
          return (
            <div className="day" key={index} id={String(index)}>
              <div className="date-value">{value}</div>
              
            </div>
          )
        }) : null}
      </div>
    </div>
  )
}

export default Calendar