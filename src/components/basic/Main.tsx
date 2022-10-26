import React, {Dispatch, SetStateAction} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../../style/main.css'
import Calendar from '../calendar/Calendar'
import CalendarRefactor from '../calendar/CalendarRefactor'
import { DateViewEnabledType } from '../../App'

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
    setDateViewEnabled: Dispatch<SetStateAction<DateViewEnabledType>>
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
    <CalendarRefactor thisStyle={props.thisStyle} thisUser={props.thisUser} responseData={props.responseData} dateViewEnabled={props.dateViewEnabled} setDateViewEnabled={props.setDateViewEnabled}/>
    {/*
    <Calendar thisStyle={props.thisStyle} thisUser={props.thisUser} responseData={props.responseData}/>
    */}
    </main>
  )
}

export default Main