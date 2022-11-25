import React, { useContext, useEffect, useState  } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import ReactDOM from 'react-dom'
import '../../style/date-view.css'
import { DateViewType } from '../../Types.types'

const DateView = (props: DateViewType) => {
    const theme = useContext(ThemeContext)
    const [thisDate, setThisDate] = useState<{"date": string, "day": string} | undefined | null>(null)
    const [dateStyle, setDateStyle] = useState<React.CSSProperties>(props.thisStyle)
    const [dir, setDir] = useState<string | null>(null)
    const [buttonStyle, setButtonStyle] = useState<React.CSSProperties | Object>({})
    const [buttonContainerStyle, setButtonContainerStyle] = useState<React.CSSProperties | Object>({})
    const [movieNight, setMovieNight] = useState<string | null | undefined>("")

    useEffect(()=> {
      if (props.dateViewEnabled.id && props.monthRange) {
        let dateElement = document.getElementById(String(props.dateViewEnabled.id))
        
        let index
        
        if (props.dateViewEnabled.id < 43) {
          for (let i = 0; i < props.monthRange.length; i++) {
            if (props.monthRange[i].date === dateElement?.firstChild?.textContent) {
              index = i
            }
          }
          let movie:string | null
          
          if (dateElement?.parentElement?.children) {
            let children = Array.from(dateElement?.children)
            movie = children[1].textContent            
            setMovieNight(movie)
          }
          
        } else {
          for (let i = 0; i < props.monthRange.length; i++) {
            if (props.monthRange[i].date === dateElement?.textContent) {
              index = i
            }
          }
          setMovieNight(dateElement?.parentElement?.firstChild?.textContent)

        }

        if (typeof index === "number") {
          setThisDate({
            "date": props.monthRange[index].date,
            "day": props.monthRange[index].day
          })
        }
      }
    }, [props.dateViewEnabled])
    
    useEffect(()=> {
        let themes = Object.keys(theme)
        if (props.thisUser) {
          for (let i = 0; i < themes.length; i++) {
            if (themes[i] === props.thisUser.theme) {
              
              let thisTheme: any = theme[themes[i] as keyof Object]
  
              setDateStyle({...props.thisStyle, ...{border: thisTheme.border}})
              setButtonStyle({
                ...props.thisStyle, 
                ...{border: thisTheme.border, 
                  backgroundColor: thisTheme.text,
                  color: thisTheme.main
              }})
              
              setButtonContainerStyle({
                ...props.thisStyle, 
                ...{border: thisTheme.border, 
                  backgroundColor: thisTheme.main,
                  color: thisTheme.text
              }})
            }
          }
        }
    }, [props.thisUser])

    useEffect(()=> {
      if (props.monthRange) {
        if (dir === "back") {
          setThisDate({
            "date": props.monthRange[props.monthRange.length - 1].date,
            "day": props.monthRange[props.monthRange.length - 1].day,
          })
        } else if (dir === "forward") {
          setThisDate({
            "date": props.monthRange[0].date,
            "day": props.monthRange[0].day
          })
        }
      }
    }, [props.monthRange])

    const changeDate = (directive: string):void => {
      setDir(directive)
      let index
      if (props.monthRange && thisDate) {
        for (let i = 0; i < props.monthRange.length; i++) {
          if (props.monthRange[i].date === thisDate.date) {
            index = i
          }
        }
        if (directive === "back" && index !== undefined) {
          if (props.monthRange[index - 1] !== undefined) {
            setThisDate({
              "date": props.monthRange[index - 1].date, 
              "day": props.monthRange[index - 1].day
            })
          } else {
            props.changeMonth("back")
          }
        } else if (directive === "forward" && index !== undefined) {
          if (props.monthRange[index + 1] !== undefined) {
            setThisDate({
              "date": props.monthRange[index + 1].date, 
              "day": props.monthRange[index + 1].day
            })
          } else {
            props.changeMonth("forward")
          }
        }
      }
    }

    useEffect(()=> {
        let themes = Object.keys(theme)
        if (props.thisUser) {
          let forward = document.getElementById("date-forward")
          let back = document.getElementById("date-back")
          for (let i = 0; i < themes.length; i++) {
            if (themes[i] === props.thisUser.theme) {
              let thisTheme: any = theme[themes[i] as keyof Object]
  
              forward?.setAttribute("fill", thisTheme.text)
              back?.setAttribute("fill", thisTheme.text)
            }
          }
        }
      }, [props.thisUser, props.thisStyle])

    return ReactDOM.createPortal(
        <div className="date-view" style={dateStyle}>
            <div className="date-controller">
                {thisDate ?                 
                  <div className="date-head">
                      <h3 className="date-view-date no-select">{thisDate.date}</h3>
                      <h2 className="date-view-day no-select">{thisDate.day}</h2>
                  </div> : null}
                <div className="date-close no-select" onClick={()=>props.setDateViewEnabled({"isOpen": false, "id": null})}>X</div>
            </div>
            <div className="date-view-body-container">
                <div className="date-view-back" onClick={()=>changeDate("back")}>
                    <svg className="back-icon" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <path id="date-back" d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"/>
                    </svg>
                </div>
                <div className="date-view-body">
                  <div className="date-view-panel">
                    <div className="add-button-container" style={buttonContainerStyle}>
                      <div className="add-button-label">Add Movie</div>
                      <div className="add-button" style={buttonStyle}>+</div>
                    </div>
                  </div>
                  <div className="movie-container">
                    <div className="movie-title">
                      {props.dateViewEnabled.movie?.Title + " (" + props.dateViewEnabled.movie?.Year + ")"}
                    </div>
                    <img className="movie-poster" alt={props.dateViewEnabled.movie?.Title + " poster"} src={props.dateViewEnabled.movie?.Poster}></img>
                  </div>
                </div>
                <div className="date-view-forward" onClick={()=>changeDate("forward")}>
                    <svg className="forward-icon" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <path id="date-forward" d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"/>
                    </svg>
                 </div>
            </div>
        </div>,
        document.getElementById('date-view-modal')!
    )
}

export default DateView