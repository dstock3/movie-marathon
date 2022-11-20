import { useEffect } from 'react'
import FilmContainer from './FilmContainer'
import { Stacks, ThisStack, Film } from '../../Types.types'
import '../../style/upcoming.css'

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
                        <FilmContainer index={thisIndex} film={film} />
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