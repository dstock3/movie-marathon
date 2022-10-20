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
    
    const changeMonth = (directive: string) => {

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

            <CalendarGrid />
        </div>
    )
}

export default CalendarRefactor