import React, {Dispatch, SetStateAction} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../../style/main.css'
import Calendar from '../calendar/Calendar'
import { DateViewEnabledType } from '../../App'
import Feed from '../feed/Feed'
import WeekGlance from '../week/WeekGlance'
import Favs from '../favorites/Favs'
import Upcoming from '../upcoming/Upcoming'

export type PostType = {
  date: string
  content: string
}

export type ThisUser = {
  handle: string,
  login: string,
  theme: string,
  movies: Array<Object>,
  posts: Array<PostType>
}

export type Users = {
  handle: string;
  login: string;
  theme: string;
  metadataIsAllowed: boolean;
  searchData: never[];
  posts: {
      date: string;
      content: string;
  }[];
  movies: {
      Title: string;
  }[];
}[]

type MainProps = {
    users: Users, 
    thisStyle: React.CSSProperties,
    thisUser?: ThisUser,
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

export type MovieType = {
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