import React, { useEffect } from 'react'
import { Stacks, ThisStack, Film } from '../../Types.types'

const Upcoming = (props:Stacks) => {
  useEffect(()=> {
    console.log(props.thisUser?.stacks)

  }, [props.thisUser?.stacks ])

  return (
    <div className="upcoming-stacks">
      {props.thisUser?.stacks ?
        <>
          <h2>Upcoming Stacks</h2>
          <ul className="stack-list">
            {props.thisUser?.stacks.map((stack: ThisStack, index) => {
              return (
                <li className="stack-info" key={index}>
                  <div className="stack-name">{stack.name}</div>
                  <div className="stack-desc">{stack.desc}</div>
                  <div className="stack-container">
                    {stack.lineup.map((film: Film, thisIndex) => {
                      return (
                        <div className="film-container" key={thisIndex}>
                          <div className="film-title">{film.Title}</div>
                          <div className="film-date">{film.Date}</div>
                          <div className="film-poster-container">
                            <img className="film-poster" src={film.Poster} alt={film.Title + " poster"}></img>
                          </div>
                          <div className="film-notes">{film.Notes}</div>
                        </div>
                      )
                    })}
                  </div>
                </li>
              )
            })}    
          </ul>
        </> : <div className="stack-msg">You don't currently have any stacks planned.</div>
      }
    </div>
  )
}

export default Upcoming