import React, { useState } from 'react'
import '../../style/main.css'
import Calendar from '../calendar/Calendar'
import Feed from '../feed/Feed'
import WeekGlance from '../week/WeekGlance'
import Favs from '../favorites/Favs'
import Upcoming from '../upcoming/Upcoming'
import { MainProps, MovieType, MonthRangeType } from '../../Types.types'
import { format } from 'date-fns'

const Main = (props: MainProps) => {
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

  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(format(new Date(), 'MMMM'))
  const [rangeofDates, setRangeOfDates] = useState<Array<Date> | null>(null)
  const [monthRange, setMonthRange] = useState<MonthRangeType>(null)
  const [currentYear, setCurrentYear] = useState(format(currentDate, 'y'))

  return (
    <main style={props.thisStyle}>
      {props.responseData ?
        <>
        <h2>Total Results {props.responseData["totalResults"]}</h2>
        <div className="search-results">
          {props.responseData.Search.map((movie:MovieType, index) => {
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
      <Calendar thisStyle={props.thisStyle} thisUser={props.thisUser} responseData={props.responseData} dateViewEnabled={props.dateViewEnabled} setDateViewEnabled={props.setDateViewEnabled} currentYear={currentYear} setRangeOfDates={setRangeOfDates} currentMonth={currentMonth} setMonthRange={setMonthRange} setCurrentMonth={setCurrentMonth} months={months} setCurrentYear={setCurrentYear} monthRange={monthRange} /> : 
    props.page === "feed" ? 
      <Feed users={props.users} thisStyle={props.thisStyle} thisUser={props.thisUser} /> :
    props.page === "week" ? 
      <WeekGlance thisStyle={props.thisStyle} thisUser={props.thisUser} /> :
    props.page === "fav" ?
      <Favs thisStyle={props.thisStyle} thisUser={props.thisUser} /> :
    props.page === "upcoming" ?
      <Upcoming /> : null
    }
    </main>
  )
}

export default Main