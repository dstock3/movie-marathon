import React, {useEffect, useState} from 'react'
import { format, eachDayOfInterval } from 'date-fns'
import '../../style/calendar-refactor.css'
import CalendarController from './CalendarController'
import CalendarGrid from './CalendarGrid'

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

type MonthRangeType = Array<{
    date: string,
    day: string
  }> | null

const CalendarRefactor = (props: CalendarProps) => {
    const [months, setMonths] = useState([
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ])
    const [currentMonth, setCurrentMonth] = useState(months[9])
    const [currentDate, setCurrentDate] = useState(String(new Date()))
    const [rangeofDates, setRangeOfDates] = useState<Array<Date> | null>(null)
    const [monthRange, setMonthRange] = useState<MonthRangeType>(null)

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
                monthArray.push({"date":format(thisDay, 'MM/dd/y'), "day":format(thisDay, 'EEEE')})
          }
          setMonthRange(monthArray)
        }

      }, [currentMonth])
    
    const changeMonth = (directive: string) => {
      let index
      for (let i = 0; i < months.length; i++) {
        if (months[i] === currentMonth) {
          index = i
        }
      }

      if (directive === "back" && index !== undefined) {
        if (index > 0) {
          setCurrentMonth(months[index - 1])
        } else {
          setCurrentMonth(months[11])
        }
      } else if (directive === "forward" && index !== undefined) {
        if (index < 11) {
          setCurrentMonth(months[index + 1])
        } else {
          setCurrentMonth(months[0])
        }
      }
    }
    
    return (
        <div className="calendar-container">
            <CalendarController changeMonth={changeMonth} currentMonth={currentMonth} thisStyle={props.thisStyle} thisUser={props.thisUser} />

            <div className="weekdays-container">
                <div className="weekday">Sunday</div>
                <div className="weekday">Monday</div>
                <div className="weekday">Tuesday</div>
                <div className="weekday">Wednesday</div>
                <div className="weekday">Thursday</div>
                <div className="weekday">Friday</div>
                <div className="weekday">Saturday</div>
            </div>

            <CalendarGrid monthRange={monthRange} />
        </div>
    )
}

export default CalendarRefactor