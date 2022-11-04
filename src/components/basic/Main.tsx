import React from 'react'
import '../../style/main.css'
import Calendar from '../calendar/Calendar'
import Feed from '../feed/Feed'
import WeekGlance from '../week/WeekGlance'
import Favs from '../favorites/Favs'
import Upcoming from '../upcoming/Upcoming'
import { MainProps, MovieType } from '../../Types.types'

const Main = (props: MainProps) => {
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
      <Calendar thisStyle={props.thisStyle} thisUser={props.thisUser} responseData={props.responseData} dateViewEnabled={props.dateViewEnabled} setDateViewEnabled={props.setDateViewEnabled}/> : 
    props.page === "feed" ? 
      <Feed users={props.users} thisStyle={props.thisStyle} thisUser={props.thisUser} /> :
    props.page === "week" ? 
      <WeekGlance /> :
    props.page === "fav" ?
      <Favs thisStyle={props.thisStyle} thisUser={props.thisUser} /> :
    props.page === "upcoming" ?
      <Upcoming /> : null
    }
    </main>
  )
}

export default Main