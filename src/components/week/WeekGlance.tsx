import React, { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { WeekGlanceProps } from '../../Types.types'
import '../../style/week-view.css'
import { format } from 'date-fns'

const WeekGlance = (props: WeekGlanceProps) => {
  const theme = useContext(ThemeContext)
  const [weekViewStyle, setWeekViewStyle] = useState<React.CSSProperties | Object>({})
  const [dayStyle, setDayStyle] = useState<React.CSSProperties | Object>({})
  const [weekFooterStyle, setWeekFooterStyle] = useState<React.CSSProperties | Object>({})
  
  type Week = {
    Sunday: string,
    Monday: string,
    Tuesday: string,
    Wednesday: string,
    Thursday: string,
    Friday: string,
    Saturday: string
  }

  const [movieNights, setMovieNights] = useState<Week>(
    {"Sunday": "", 
    "Monday": "", 
    "Tuesday": "", 
    "Wednesday": "",
    "Thursday": "",
    "Friday": "",
    "Saturday": ""
  })
  
  const [thisWeek, setThisWeek] = useState<Week>(
    {"Sunday": "", 
    "Monday": "", 
    "Tuesday": "", 
    "Wednesday": "",
    "Thursday": "",
    "Friday": "",
    "Saturday": ""
  })

  function assignMovieNight(lineup: Week, date: string): Week {
    if (props.thisUser?.stacks && props.monthRange) {
      for (let i = 0; i < props.thisUser?.stacks?.length; i++) {
        for (let x = 0; x < props.thisUser?.stacks[i].lineup.length; x++) {
          if (props.thisUser?.stacks[i].lineup[x].Date === date) {
            for (let c = 0; c < props.monthRange.length; c++) {
              if (props.monthRange[c].date === date) {
                
                let day = props.monthRange[c].day
                lineup[day as keyof Week] = props.thisUser?.stacks[i].lineup[x].Title
              }
            }
          }
        }
      }
    }
    return lineup
  }

  useEffect(()=> {
    let today = format(props.currentDate, 'MM/dd/y')
    let newWeek = thisWeek
    let weekLineup: Week = movieNights

    if (props.monthRange) {
      for (let i = 0; i < props.monthRange.length; i++) {
        if (props.monthRange[i].date === today) {
          for (let prop in newWeek) {
            if (prop === props.monthRange[i].day) {
              newWeek[prop as keyof Week] = props.monthRange[i].date
              weekLineup = assignMovieNight(weekLineup, props.monthRange[i].date)
              let arr = Object.entries(newWeek)
              let thisIndex = arr.findIndex(e => e[0] === prop);
              
              if (thisIndex === 0) {
                newWeek[Object.keys(newWeek)[1] as keyof Week] = props.monthRange[i + 1].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 1].date)
                newWeek[Object.keys(newWeek)[2] as keyof Week] = props.monthRange[i + 2].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 2].date)
                newWeek[Object.keys(newWeek)[3] as keyof Week] = props.monthRange[i + 3].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 3].date)
                newWeek[Object.keys(newWeek)[4] as keyof Week] = props.monthRange[i + 4].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 4].date)
                newWeek[Object.keys(newWeek)[5] as keyof Week] = props.monthRange[i + 5].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 5].date)
                newWeek[Object.keys(newWeek)[6] as keyof Week] = props.monthRange[i + 6].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 6].date)
              } else if (thisIndex === 1) {
                newWeek[Object.keys(newWeek)[0] as keyof Week] = props.monthRange[i - 1].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 1].date)

                newWeek[Object.keys(newWeek)[2] as keyof Week] = props.monthRange[i + 1].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 1].date)
                newWeek[Object.keys(newWeek)[3] as keyof Week] = props.monthRange[i + 2].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 2].date)
                newWeek[Object.keys(newWeek)[4] as keyof Week] = props.monthRange[i + 3].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 3].date)
                newWeek[Object.keys(newWeek)[5] as keyof Week] = props.monthRange[i + 4].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 4].date)
                newWeek[Object.keys(newWeek)[6] as keyof Week] = props.monthRange[i + 5].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 5].date)
              } else if (thisIndex === 2) {
                newWeek[Object.keys(newWeek)[0] as keyof Week] = props.monthRange[i - 2].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 2].date)
                newWeek[Object.keys(newWeek)[1] as keyof Week] = props.monthRange[i - 1].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 1].date)

                newWeek[Object.keys(newWeek)[3] as keyof Week] = props.monthRange[i + 1].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 1].date)
                newWeek[Object.keys(newWeek)[4] as keyof Week] = props.monthRange[i + 2].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 2].date)
                newWeek[Object.keys(newWeek)[5] as keyof Week] = props.monthRange[i + 3].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 3].date)
                newWeek[Object.keys(newWeek)[6] as keyof Week] = props.monthRange[i + 4].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 4].date)
              } else if (thisIndex === 3) {
                newWeek[Object.keys(newWeek)[0] as keyof Week] = props.monthRange[i - 3].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 3].date)
                newWeek[Object.keys(newWeek)[1] as keyof Week] = props.monthRange[i - 2].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 2].date)
                newWeek[Object.keys(newWeek)[2] as keyof Week] = props.monthRange[i - 1].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 1].date)

                newWeek[Object.keys(newWeek)[4] as keyof Week] = props.monthRange[i + 1].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 1].date)
                newWeek[Object.keys(newWeek)[5] as keyof Week] = props.monthRange[i + 2].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 2].date)
                newWeek[Object.keys(newWeek)[6] as keyof Week] = props.monthRange[i + 3].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 3].date)
              } else if (thisIndex === 4) {
                newWeek[Object.keys(newWeek)[0] as keyof Week] = props.monthRange[i - 4].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 4].date)
                newWeek[Object.keys(newWeek)[1] as keyof Week] = props.monthRange[i - 3].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 3].date)
                newWeek[Object.keys(newWeek)[2] as keyof Week] = props.monthRange[i - 2].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 2].date)
                newWeek[Object.keys(newWeek)[3] as keyof Week] = props.monthRange[i - 1].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 1].date)
                
                newWeek[Object.keys(newWeek)[5] as keyof Week] = props.monthRange[i + 1].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 1].date)
                newWeek[Object.keys(newWeek)[6] as keyof Week] = props.monthRange[i + 2].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 2].date)
              } else if (thisIndex === 5) {
                newWeek[Object.keys(newWeek)[0] as keyof Week] = props.monthRange[i - 5].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 5].date)
                newWeek[Object.keys(newWeek)[1] as keyof Week] = props.monthRange[i - 4].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 4].date)
                newWeek[Object.keys(newWeek)[2] as keyof Week] = props.monthRange[i - 3].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 3].date)
                newWeek[Object.keys(newWeek)[3] as keyof Week] = props.monthRange[i - 2].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 2].date)
                newWeek[Object.keys(newWeek)[4] as keyof Week] = props.monthRange[i - 1].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 1].date)
                
                newWeek[Object.keys(newWeek)[6] as keyof Week] = props.monthRange[i + 1].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i + 1].date)
              } else if (thisIndex === 6) {
                newWeek[Object.keys(newWeek)[0] as keyof Week] = props.monthRange[i - 6].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 6].date)
                newWeek[Object.keys(newWeek)[1] as keyof Week] = props.monthRange[i - 5].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 5].date)
                newWeek[Object.keys(newWeek)[2] as keyof Week] = props.monthRange[i - 4].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 4].date)
                newWeek[Object.keys(newWeek)[3] as keyof Week] = props.monthRange[i - 3].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 3].date)
                newWeek[Object.keys(newWeek)[4] as keyof Week] = props.monthRange[i - 2].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 2].date)
                newWeek[Object.keys(newWeek)[5] as keyof Week] = props.monthRange[i - 1].date
                weekLineup = assignMovieNight(weekLineup, props.monthRange[i - 1].date)
              }
            }
          }
        }
      }
    }
    setThisWeek(newWeek)
    setMovieNights(weekLineup)
  }, [props.monthRange])

  useEffect(()=> {
    let themes = Object.keys(theme)
    if (props.thisUser) {
      for (let i = 0; i < themes.length; i++) {
        if (themes[i] === props.thisUser.theme) {
          
          let thisTheme: any = theme[themes[i] as keyof Object]

          setWeekViewStyle({...props.thisStyle, ...{borderBottom: thisTheme.border, borderTop: thisTheme.border}})
          setDayStyle({...props.thisStyle, ...{border: thisTheme.border}})
          setWeekFooterStyle({...props.thisStyle, ...{color: thisTheme.main, backgroundColor: thisTheme.text}})
        }
      }
    }
  }, [props.thisUser, props.thisStyle])

  const showDate = (id: number, movieTitle: string, date: string):void => {
    let movie
    if (props.thisUser?.stacks) {
      for (let i = 0; i < props.thisUser?.stacks.length; i++) {
          for (let x = 0; x < props.thisUser?.stacks[i].lineup.length; x++) {
              if (props.thisUser?.stacks[i].lineup[x].Title === movieTitle) {
                  movie = props.thisUser?.stacks[i].lineup[x]
              }
          }
      }
    }

    if (props.monthRange) {
      for (let i = 0; i < props.monthRange.length; i++) {
        if (props.monthRange[i].date === date) {
            props.setDateViewEnabled({"isOpen": true, "id": id, date: date, movie: movie})
        }
      }
    }
  }

  return (
    <div className="week-view" style={weekViewStyle}>
      <div className="week-view-day sunday" style={dayStyle} onClick={()=> showDate(43, movieNights.Sunday, thisWeek.Sunday)}>
        <div className="week-label">Sunday</div>
        <div className="week-contents">
          <div className="week-movie-container">
            {movieNights.Sunday}
          </div>
          <div className="week-footer" id="43" style={weekFooterStyle}>
            {thisWeek.Sunday}
          </div>  
        </div>
      </div>
      <div className="week-view-day monday" style={dayStyle} onClick={()=> showDate(44, movieNights.Monday, thisWeek.Monday)}>
        <div className="week-label">Monday</div>
        <div className="week-contents">
          <div className="week-movie-container">
            {movieNights.Monday}
          </div>
          <div className="week-footer" id="44" style={weekFooterStyle}>
            {thisWeek.Monday}
          </div>
        </div>
      </div>
      <div className="week-view-day tuesday" style={dayStyle} onClick={()=> showDate(45, movieNights.Tuesday, thisWeek.Tuesday)}>
        <div className="week-label">Tuesday</div>
        <div className="week-contents">
          <div className="week-movie-container">
            {movieNights.Tuesday}
          </div>
          <div className="week-footer" id="45" style={weekFooterStyle}>
            {thisWeek.Tuesday}
          </div>
        </div>
      </div>
      <div className="week-view-day wednesday" style={dayStyle} onClick={()=> showDate(46, movieNights.Wednesday, thisWeek.Wednesday)}>
        <div className="week-label">Wednesday</div>
        <div className="week-contents">
          <div className="week-movie-container">
            {movieNights.Wednesday}
          </div>
          <div className="week-footer" id="46" style={weekFooterStyle}>
            {thisWeek.Wednesday}
          </div>
        </div>
      </div>
      <div className="week-view-day thursday" style={dayStyle} onClick={()=> showDate(47, movieNights.Thursday, thisWeek.Thursday)}>
        <div className="week-label">Thursday</div>
        <div className="week-contents">
          <div className="week-movie-container">
            {movieNights.Thursday}
          </div>
          <div className="week-footer" id="47" style={weekFooterStyle}>
            {thisWeek.Thursday}
          </div> 
        </div>
      </div>
      <div className="week-view-day friday" style={dayStyle} onClick={()=> showDate(48, movieNights.Friday, thisWeek.Friday)}>
        <div className="week-label">Friday</div>
        <div className="week-contents">
          <div className="week-movie-container">
            {movieNights.Friday}
          </div>
          <div className="week-footer" id="48" style={weekFooterStyle}>
            {thisWeek.Friday}
          </div>
        </div>
      </div>
      <div className="week-view-day saturday" style={dayStyle} onClick={()=> showDate(49, movieNights.Saturday, thisWeek.Saturday)}>
        <div className="week-label">Saturday</div>
        <div className="week-contents">
          <div className="week-movie-container">
            {movieNights.Saturday}
          </div>
          <div className="week-footer" id="49" style={weekFooterStyle}>
            {thisWeek.Saturday}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeekGlance