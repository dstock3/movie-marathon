import React, { useEffect, useState, useContext } from 'react'
import '../../style/calendar.css'
import { ThemeContext } from '../context/ThemeContext'
import { GridProps} from '../../Types.types'

const CalendarGrid = (props: GridProps) => {
    const [start, setStart] = useState(0)
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

    useEffect(()=> {
        if (props.monthRange) {
            switch(props.monthRange[0].day) {
                case "Sunday":
                    setStart(1)
                    break;
                case "Monday":
                    setStart(2)
                    break;
                case "Tuesday":
                    setStart(3)
                    break;
                case "Wednesday":
                    setStart(4)
                    break;
                case "Thursday":
                    setStart(5)
                    break;
                case "Friday":
                    setStart(6)
                    break;
                case "Saturday":
                    setStart(7)
                    break;
              }
        }
    }, [props.monthRange])

    const showDate = (id: number):void => {
        let dateElement = document.getElementById(String(id))
        let children
        if (dateElement?.children) { children = Array.from(dateElement?.children) }
        let date
        let movieTitle
        if (children) { 
            date = children[0].textContent 
            movieTitle = children[1].textContent 
        }
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
                if (props.monthRange[i].date === dateElement?.firstChild?.textContent) {
                    props.setDateViewEnabled({"isOpen": true, "id": id, "date": date, "movie": movie})
                }
            }
        }
    }

    useEffect(()=> {
        let dates = []

        for (let i = 1; i < 42; i++) {
            let square = document.getElementById(String(i))
            square?.classList.remove("filled")

            let childElements
            if (square?.children) {
                childElements = Array.from(square?.children)
                for (let x = 0; x < childElements.length; x++) {
                    childElements[x].remove()

                }
            }

            let themes = Object.keys(theme)
            
            for (let x = 0; x < themes.length; x++) {
                if (themes[x] === props.thisUser?.theme) {
                  
                  let thisTheme: any = theme[themes[x] as keyof Object]

                  if (square !== null) {
                    square.style.backgroundColor = thisTheme.main
                    
                  }
                }
            }
        }
        
        if (props.monthRange && start) {
            for (let i = start; i < props.monthRange.length + 7; i++) {
                let square = document.getElementById(String(i))
                dates.push(square)
            }

            for (let i = 0; i < props.monthRange.length; i++) {
                let dateElement = document.createElement("div")
                dateElement.classList.add("date-content")
                let dateText = document.createTextNode(props.monthRange[i].date);
                dateElement.appendChild(dateText)
                dates[i]?.classList.add("filled")
                dates[i]?.appendChild(dateElement)
                
                let movieElement = document.createElement("div")
                movieElement.classList.add("movie-night")
                dates[i]?.appendChild(movieElement)
                
                if (props.thisUser?.stacks) {
                    for (let x = 0; x < props.thisUser?.stacks?.length; x++) {
                        for (let y = 0; y < props.thisUser?.stacks[x].lineup.length; y++) {
                            if (props.thisUser?.stacks[x].lineup[y].Date === props.monthRange[i].date) {
                                let movieText = document.createTextNode(props.thisUser?.stacks[x].lineup[y].Title);
                                movieElement.appendChild(movieText)
                            }
                        }
                    }
                } 
            }
        }
    }, [start, props.monthRange, props.thisUser])


    return (
        <div className="calendar-grid">
            <div className="row" id="week-one">
                <div className="square no-select" style={thisTheme} id="1" onClick={()=> showDate(1)}>

                </div>
                <div className="square no-select" style={thisTheme} id="2" onClick={()=> showDate(2)}>

                </div>
                <div className="square no-select" style={thisTheme} id="3" onClick={()=> showDate(3)}>

                </div>
                <div className="square no-select" style={thisTheme} id="4" onClick={()=> showDate(4)}>

                </div>
                <div className="square no-select" style={thisTheme} id="5" onClick={()=> showDate(5)}>

                </div>
                <div className="square no-select" style={thisTheme} id="6" onClick={()=> showDate(6)}>

                </div>
                <div className="square no-select" style={thisTheme} id="7" onClick={()=> showDate(7)}>

                </div>
            </div>
            <div className="row" id="week-two">
                <div className="square no-select" style={thisTheme} id="8" onClick={()=> showDate(8)}>

                </div>
                <div className="square no-select" style={thisTheme} id="9" onClick={()=> showDate(9)}>

                </div>
                <div className="square no-select" style={thisTheme} id="10" onClick={()=> showDate(10)}>

                </div>
                <div className="square no-select" style={thisTheme} id="11" onClick={()=> showDate(11)}>

                </div>
                <div className="square no-select" style={thisTheme} id="12" onClick={()=> showDate(12)}>

                </div>
                <div className="square no-select" style={thisTheme} id="13" onClick={()=> showDate(13)}>

                </div>
                <div className="square no-select" style={thisTheme} id="14" onClick={()=> showDate(14)}>

                </div>
            </div>
            <div className="row" id="week-three">
                <div className="square no-select" style={thisTheme} id="15" onClick={()=> showDate(15)}>

                </div>
                <div className="square no-select" style={thisTheme} id="16" onClick={()=> showDate(16)}>

                </div>
                <div className="square no-select" style={thisTheme} id="17" onClick={()=> showDate(17)}>

                </div>
                <div className="square no-select" style={thisTheme} id="18" onClick={()=> showDate(18)}>

                </div>
                <div className="square no-select" style={thisTheme} id="19" onClick={()=> showDate(19)}>

                </div>
                <div className="square no-select" style={thisTheme} id="20" onClick={()=> showDate(20)}>

                </div>
                <div className="square no-select" style={thisTheme} id="21" onClick={()=> showDate(21)}>

                </div>
            </div>
            <div className="row" id="week-four">
                <div className="square no-select" style={thisTheme} id="22" onClick={()=> showDate(22)}>

                </div>
                <div className="square no-select" style={thisTheme} id="23" onClick={()=> showDate(23)}>

                </div>
                <div className="square no-select" style={thisTheme} id="24" onClick={()=> showDate(24)}>

                </div>
                <div className="square no-select" style={thisTheme} id="25" onClick={()=> showDate(25)}>

                </div>
                <div className="square no-select" style={thisTheme} id="26" onClick={()=> showDate(26)}>

                </div>
                <div className="square no-select" style={thisTheme} id="27" onClick={()=> showDate(27)}>

                </div>
                <div className="square no-select" style={thisTheme} id="28" onClick={()=> showDate(28)}>

                </div>
            </div>
            <div className="row" id="week-five">
                <div className="square no-select" style={thisTheme} id="29" onClick={()=> showDate(29)}>

                </div>
                <div className="square no-select" style={thisTheme} id="30" onClick={()=> showDate(30)}>

                </div>
                <div className="square no-select" style={thisTheme} id="31" onClick={()=> showDate(31)}>

                </div>
                <div className="square no-select" style={thisTheme} id="32" onClick={()=> showDate(32)}>

                </div>
                <div className="square no-select" style={thisTheme} id="33" onClick={()=> showDate(33)}>

                </div>
                <div className="square no-select" style={thisTheme} id="34" onClick={()=> showDate(34)}>

                </div>
                <div className="square no-select" style={thisTheme} id="35" onClick={()=> showDate(35)}>

                </div>
            </div>
            {props.monthRange ?
                props.monthRange.length > 30 && start > 5?
                    <div className="row" id="week-six">
                        <div className="square no-select" style={thisTheme} id="36" onClick={()=> showDate(36)}>
        
                        </div>
                        <div className="square no-select" style={thisTheme} id="37" onClick={()=> showDate(37)}>
        
                        </div>
                        <div className="square no-select" style={thisTheme} id="38" onClick={()=> showDate(38)}>
        
                        </div>
                        <div className="square no-select" style={thisTheme} id="39" onClick={()=> showDate(39)}>
        
                        </div>
                        <div className="square no-select" style={thisTheme} id="40" onClick={()=> showDate(40)}>
        
                        </div>
                        <div className="square no-select" style={thisTheme} id="41" onClick={()=> showDate(41)}>
        
                        </div>
                        <div className="square no-select" style={thisTheme} id="42" onClick={()=> showDate(42)}>
        
                        </div>
                    </div> : null 
                : null
            }
        </div>
    )
}

export default CalendarGrid