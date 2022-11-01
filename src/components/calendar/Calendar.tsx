import React, {useEffect, useState, Dispatch, SetStateAction} from 'react'
import { format, eachDayOfInterval } from 'date-fns'
import '../../style/calendar.css'
import CalendarController from './CalendarController'
import CalendarGrid from './CalendarGrid'
import DateView from '../modals/DateView'
import { DateViewEnabledType } from '../../App'

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
  dateViewEnabled: DateViewEnabledType,
  setDateViewEnabled: Dispatch<SetStateAction<DateViewEnabledType>>
}

export type MonthRangeType = Array<{
    date: string,
    day: string
}> | null

const Calendar = (props: CalendarProps) => {
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
    const [currentDate, setCurrentDate] = useState(new Date())
    const [rangeofDates, setRangeOfDates] = useState<Array<Date> | null>(null)
    const [monthRange, setMonthRange] = useState<MonthRangeType>(null)
    const [currentYear, setCurrentYear] = useState(format(currentDate, 'y'))

    useEffect(()=> {    
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
          setCurrentYear(String(parseInt(currentYear) - 1))
          setCurrentMonth(months[11])
        }
      } else if (directive === "forward" && index !== undefined) {
        if (index < 11) {
          setCurrentMonth(months[index + 1])
        } else {
          setCurrentYear(String(parseInt(currentYear) + 1))
          setCurrentMonth(months[0])
        }
      }
    }
    useEffect(()=> {
      console.log(currentYear)

    }, [currentYear])
    
    return (
      <>
        <div className="calendar-container">
            <CalendarController changeMonth={changeMonth} currentMonth={currentMonth} thisStyle={props.thisStyle} thisUser={props.thisUser} />

            <div className="weekdays-container">
                <div className="weekday no-select">Sunday</div>
                <div className="weekday no-select">Monday</div>
                <div className="weekday no-select">Tuesday</div>
                <div className="weekday no-select">Wednesday</div>
                <div className="weekday no-select">Thursday</div>
                <div className="weekday no-select">Friday</div>
                <div className="weekday no-select">Saturday</div>
            </div>

            <CalendarGrid monthRange={monthRange} thisStyle={props.thisStyle} thisUser={props.thisUser} setDateViewEnabled={props.setDateViewEnabled}/>
        </div>
        {props.dateViewEnabled.isOpen ? 
          <DateView dateViewEnabled={props.dateViewEnabled} thisStyle={props.thisStyle} thisUser={props.thisUser} setDateViewEnabled={props.setDateViewEnabled} monthRange={monthRange} changeMonth={changeMonth} /> : null}
      </>
    )
}

export default Calendar