import React from 'react'
import { FilmContainerProps } from '../../Types.types'

const FilmContainer = (props: FilmContainerProps) => {
  return (
    <div className="film-container" key={props.index}>
      <div className="film-title">{props.film.Title}</div>
      <div className="film-date">{props.film.Date}</div>
      <div className="film-poster-container">
        <img className="film-poster" src={props.film.Poster} alt={props.film.Title + " poster"}></img>
      </div>
      <div className="film-notes">{props.film.Notes}</div>
    </div>
  )
}

export default FilmContainer