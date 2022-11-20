import { useState, useEffect, useContext } from 'react'
import FilmContainer from './FilmContainer'
import { Stacks, ThisStack, Film } from '../../Types.types'
import { ThemeContext } from '../context/ThemeContext'
import '../../style/upcoming.css'

const Upcoming = (props:Stacks) => {
  const theme = useContext(ThemeContext)
  const [thisTheme, setThisTheme] = useState<React.CSSProperties>({"border": theme.light.border})

  useEffect(()=> {
    let themes = Object.keys(theme)
    if (props.thisUser) {
      for (let i = 0; i < themes.length; i++) {
        if (themes[i] === props.thisUser.theme) {
          
          let thisTheme: any = theme[themes[i] as keyof Object]

          setThisTheme({"border": thisTheme.border, "color": thisTheme.text})
        }
      }
    }
  }, [])

  return (
    <div className="upcoming-stacks">
      {props.thisUser?.stacks ?
        <>
          <h2>Upcoming Stacks</h2>
          <ul className="stack-list">
            {props.thisUser?.stacks.map((stack: ThisStack, index) => {
              return (
                <li className="stack-info" key={index} style={thisTheme}>
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