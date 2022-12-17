import React, { useEffect, useState } from 'react'
import '../../style/main.css'
import Calendar from '../calendar/Calendar'
import Feed from '../feed/Feed'
import WeekGlance from '../week/WeekGlance'
import Favs from '../favorites/Favs'
import Upcoming from '../upcoming/Upcoming'
import { MainProps, MovieType, MonthRangeType } from '../../Types.types'
import { format } from 'date-fns'
import DateView from '../modals/DateView'

// Main is responsible for rendering the main content area of the user interface based on the current page being displayed and maintaining state for a number of variables related to the current date and month

const Main = (props: MainProps) => {
  const [months, setMonths] = useState<string[]>([
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

  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [currentMonth, setCurrentMonth] = useState<string>(format(new Date(), 'MMMM'))
  const [rangeofDates, setRangeOfDates] = useState<Array<Date> | null>(null)
  const [monthRange, setMonthRange] = useState<MonthRangeType>(null)
  const [currentYear, setCurrentYear] = useState<string>(format(currentDate, 'y'))

  const changeMonth = (directive: string):void => {
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

  return (
    <>
    <main style={props.thisStyle} id={props.page}>
      {props.responseData ?
        <>
        <h2>Total Results {props.responseData["totalResults"]}</h2>
        <div className="search-results">
          {props.responseData.Search.map((movie:MovieType, index):JSX.Element => {
            return (
              <div className="movie-list-item" key={index}>
                <div className="movie-title">
                  {movie.Title} ({movie.Year})
                </div>
                <img className="movie-img" src={movie.Poster} alt={movie.Title + "poster"}></img>
              </div>
            );
          })}
          
        </div>
        </>
    : null}
    {props.page === "calendar" ? 
      <Calendar thisStyle={props.thisStyle} thisUser={props.thisUser} responseData={props.responseData} dateViewEnabled={props.dateViewEnabled} setDateViewEnabled={props.setDateViewEnabled} currentYear={currentYear} setRangeOfDates={setRangeOfDates} currentMonth={currentMonth} setMonthRange={setMonthRange} setCurrentMonth={setCurrentMonth} months={months} setCurrentYear={setCurrentYear} monthRange={monthRange} changeMonth={changeMonth} /> : 
    
    props.page === "feed" ? 
      <Feed users={props.users} thisStyle={props.thisStyle} thisUser={props.thisUser} /> :
    
    props.page === "week" ? 
      <WeekGlance thisStyle={props.thisStyle} thisUser={props.thisUser} currentDate={currentDate} monthRange={monthRange} setDateViewEnabled={props.setDateViewEnabled} setMonthRange={setMonthRange} /> :
    
    props.page === "fav" ?
      <Favs thisStyle={props.thisStyle} thisUser={props.thisUser} /> :
    
    props.page === "upcoming" ?
      <Upcoming thisStyle={props.thisStyle} thisUser={props.thisUser} /> : null
    }
    </main>
    {props.dateViewEnabled.isOpen && 
          <DateView dateViewEnabled={props.dateViewEnabled} thisStyle={props.thisStyle} thisUser={props.thisUser} setDateViewEnabled={props.setDateViewEnabled} monthRange={monthRange} changeMonth={changeMonth} />}
    </>
  )
}

export default Main