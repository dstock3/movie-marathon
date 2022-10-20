import React, {useContext, useEffect, useState} from 'react'
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

const CalendarRefactor = (props: CalendarProps) => {
    const [currentMonth, setCurrentMonth] = useState("October")
    const [currentDate, setCurrentDate] = useState(String(new Date()))
    const [rangeofDates, setRangeOfDates] = useState<Array<Date> | null>(null)
    const [monthRange, setMonthRange] = useState<Array<Object> | null>(null)

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
        console.log(monthRange)

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