import {useEffect} from 'react'
import { format, eachDayOfInterval } from 'date-fns'
import '../../style/calendar.css'
import CalendarController from './CalendarController'
import CalendarGrid from './CalendarGrid'
import { CalendarProps } from '../../Types.types'

const Calendar = (props: CalendarProps) => {
    useEffect(()=> {    
        const oneYearAgo = format(new Date(parseInt(props.currentYear) - 1, parseInt(format(new Date(), 'MM')) - 1, parseInt(format(new Date(), 'dd'))), 'MM/dd/y')
    
        const oneYearFromToday = format(new Date(parseInt(props.currentYear) + 1, parseInt(format(new Date(), 'MM')) - 1, parseInt(format(new Date(), 'dd'))), 'MM/dd/y')
        
        const thisRange = eachDayOfInterval({
          start: new Date(oneYearAgo),
          end: new Date(oneYearFromToday)
        })
        props.setRangeOfDates(thisRange)
        
        let monthArray = []
        for (let i = 0; i < thisRange.length; i++) {
          let thisDay = new Date(thisRange[i])
          let formattedThisYear = format(thisDay, 'y')
          let formattedThisMonth = format(thisDay, 'MMMM')
          
          if (formattedThisMonth === props.currentMonth &&
            props.currentYear === formattedThisYear) {
                monthArray.push({"date":format(thisDay, 'MM/dd/y'), "day":format(thisDay, 'EEEE')})
          }
          props.setMonthRange(monthArray)
        }
      }, [props.currentMonth, props.currentYear])
        
    return (
      <div className="calendar-container">
          <CalendarController changeMonth={props.changeMonth} currentMonth={props.currentMonth} currentYear={props.currentYear} thisStyle={props.thisStyle} thisUser={props.thisUser} />

          <div className="weekdays-container">
              <div className="weekday no-select">Sunday</div>
              <div className="weekday no-select">Monday</div>
              <div className="weekday no-select">Tuesday</div>
              <div className="weekday no-select">Wednesday</div>
              <div className="weekday no-select">Thursday</div>
              <div className="weekday no-select">Friday</div>
              <div className="weekday no-select">Saturday</div>
          </div>

          <CalendarGrid monthRange={props.monthRange} thisStyle={props.thisStyle} thisUser={props.thisUser} setDateViewEnabled={props.setDateViewEnabled}/>
      </div>
    )
}

export default Calendar