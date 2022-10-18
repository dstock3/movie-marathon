import React, {useEffect, useState} from 'react'
import { format, eachDayOfInterval } from 'date-fns'
import '../../style/calendar.css'

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(String(new Date()))
  const [currentMonth, setCurrentMonth] = useState(String(format(new Date(), 'MMMM')))
  const [rangeofDates, setRangeOfDates] = useState<Array<Date> | null>(null)
  const [thisMonthDays, setThisMonthDays] = useState()
  const [monthRange, setMonthRange] = useState<Array<String> | null>()

  useEffect(()=> {
    const today = new Date()

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
  }, [])

  return (
    <div className="calendar-container">
      <h2 className="month">{currentMonth}</h2>
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