import React, { useEffect, useState, useContext, Dispatch, SetStateAction } from 'react'
import '../../style/calendar-refactor.css'
import { ThemeContext } from '../context/ThemeContext'

type GridProps = {
    monthRange?: Array<{
        date: string,
        day: string
      }> | null,
      thisStyle: React.CSSProperties,
      thisUser?: {
        handle: string,
        login: string,
        theme: string,
      },
      setDateViewEnabled: Dispatch<SetStateAction<{"isOpen": boolean, "id": number | null}>>
}

const CalendarGrid = (props: GridProps) => {
    const [start, setStart] = useState(0)
    const theme = useContext(ThemeContext)
    const [thisTheme, setThisTheme] = useState<React.CSSProperties>({"border": theme.light.border})
    
    useEffect(()=> {
        if (props.thisUser) {
            if (props.thisUser.theme === "dark") {
                setThisTheme({"border": theme.dark.border, "color": theme.dark.text})
            } else if (props.thisUser.theme === "light") {
                setThisTheme({"border": theme.light.border, "color": theme.light.text})
            } else if (props.thisUser.theme === "mint") {
                setThisTheme({"border": theme.mint.border, "color": theme.mint.text})
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

    const showDate = (id: number) => {
        props.setDateViewEnabled({"isOpen": true, "id": id})
        
    }

    useEffect(()=> {
        let dates = []

        for (let i = 1; i < 42; i++) {
            let square = document.getElementById(String(i))
            if (square?.firstChild) square.firstChild.remove()
        }
        
        if (props.monthRange && start) {
            for (let i = start; i < props.monthRange.length + 7; i++) {
                let square = document.getElementById(String(i))
                square?.classList.add("filled")
                dates.push(square)
                
            }

            for (let i = 0; i < props.monthRange.length; i++) {
                let dateElement = document.createElement("div")
                dateElement.classList.add("date-content")
                let dateText = document.createTextNode(props.monthRange[i].date);
                dateElement.appendChild(dateText)
                dates[i]?.appendChild(dateElement)
            }
        }
    }, [start, props.monthRange])
    
    return (
        <div className="calendar-grid">
            <div className="row" id="week-one">
                <div className="square" style={thisTheme} id="1" onClick={()=> showDate(1)}>

                </div>
                <div className="square" style={thisTheme} id="2" onClick={()=> showDate(2)}>

                </div>
                <div className="square" style={thisTheme} id="3" onClick={()=> showDate(3)}>

                </div>
                <div className="square" style={thisTheme} id="4" onClick={()=> showDate(4)}>

                </div>
                <div className="square" style={thisTheme} id="5" onClick={()=> showDate(5)}>

                </div>
                <div className="square" style={thisTheme} id="6" onClick={()=> showDate(6)}>

                </div>
                <div className="square" style={thisTheme} id="7" onClick={()=> showDate(7)}>

                </div>
            </div>
            <div className="row" id="week-two">
                <div className="square" style={thisTheme} id="8" onClick={()=> showDate(8)}>

                </div>
                <div className="square" style={thisTheme} id="9" onClick={()=> showDate(9)}>

                </div>
                <div className="square" style={thisTheme} id="10" onClick={()=> showDate(10)}>

                </div>
                <div className="square" style={thisTheme} id="11" onClick={()=> showDate(11)}>

                </div>
                <div className="square" style={thisTheme} id="12" onClick={()=> showDate(12)}>

                </div>
                <div className="square" style={thisTheme} id="13" onClick={()=> showDate(13)}>

                </div>
                <div className="square" style={thisTheme} id="14" onClick={()=> showDate(14)}>

                </div>
            </div>
            <div className="row" id="week-three">
                <div className="square" style={thisTheme} id="15" onClick={()=> showDate(15)}>

                </div>
                <div className="square" style={thisTheme} id="16" onClick={()=> showDate(16)}>

                </div>
                <div className="square" style={thisTheme} id="17" onClick={()=> showDate(17)}>

                </div>
                <div className="square" style={thisTheme} id="18" onClick={()=> showDate(18)}>

                </div>
                <div className="square" style={thisTheme} id="19" onClick={()=> showDate(19)}>

                </div>
                <div className="square" style={thisTheme} id="20" onClick={()=> showDate(20)}>

                </div>
                <div className="square" style={thisTheme} id="21" onClick={()=> showDate(21)}>

                </div>
            </div>
            <div className="row" id="week-four">
                <div className="square" style={thisTheme} id="22" onClick={()=> showDate(22)}>

                </div>
                <div className="square" style={thisTheme} id="23" onClick={()=> showDate(23)}>

                </div>
                <div className="square" style={thisTheme} id="24" onClick={()=> showDate(24)}>

                </div>
                <div className="square" style={thisTheme} id="25" onClick={()=> showDate(25)}>

                </div>
                <div className="square" style={thisTheme} id="26" onClick={()=> showDate(26)}>

                </div>
                <div className="square" style={thisTheme} id="27" onClick={()=> showDate(27)}>

                </div>
                <div className="square" style={thisTheme} id="28" onClick={()=> showDate(28)}>

                </div>
            </div>
            <div className="row" id="week-five">
                <div className="square" style={thisTheme} id="29" onClick={()=> showDate(29)}>

                </div>
                <div className="square" style={thisTheme} id="30" onClick={()=> showDate(30)}>

                </div>
                <div className="square" style={thisTheme} id="31" onClick={()=> showDate(31)}>

                </div>
                <div className="square" style={thisTheme} id="32" onClick={()=> showDate(32)}>

                </div>
                <div className="square" style={thisTheme} id="33" onClick={()=> showDate(33)}>

                </div>
                <div className="square" style={thisTheme} id="34" onClick={()=> showDate(34)}>

                </div>
                <div className="square" style={thisTheme} id="35" onClick={()=> showDate(35)}>

                </div>
            </div>
            {props.monthRange ?
                props.monthRange.length > 30 && start > 5?
                    <div className="row" id="week-six">
                        <div className="square" style={thisTheme} id="36" onClick={()=> showDate(36)}>
        
                        </div>
                        <div className="square" style={thisTheme} id="37" onClick={()=> showDate(37)}>
        
                        </div>
                        <div className="square" style={thisTheme} id="38" onClick={()=> showDate(38)}>
        
                        </div>
                        <div className="square" style={thisTheme} id="39" onClick={()=> showDate(39)}>
        
                        </div>
                        <div className="square" style={thisTheme} id="40" onClick={()=> showDate(40)}>
        
                        </div>
                        <div className="square" style={thisTheme} id="41" onClick={()=> showDate(41)}>
        
                        </div>
                        <div className="square" style={thisTheme} id="42" onClick={()=> showDate(42)}>
        
                        </div>
                    </div> : null 
                : null
            }
        </div>
    )
}

export default CalendarGrid