import React, {Dispatch, SetStateAction} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../../style/main.css'
import Calendar from '../calendar/Calendar'
import { DateViewEnabledType } from '../../App'
import Feed from '../feed/Feed'
import WeekGlance from '../week/WeekGlance'
import Favs from '../favorites/Favs'
import Upcoming from '../upcoming/Upcoming'

type MainProps = {
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
    setDateViewEnabled: Dispatch<SetStateAction<DateViewEnabledType>>,
    page: string,
    setPage: Dispatch<SetStateAction<string>>
}

type MovieType = {
  [key: string]: any
  propname?: any
}

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
      <Feed /> :
    props.page === "week" ? 
      <WeekGlance /> :
    props.page === "fav" ?
      <Favs /> :
    props.page === "upcoming" ?
      <Upcoming /> : null
    }
    </main>
  )
}

export default Main