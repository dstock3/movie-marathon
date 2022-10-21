import React, { useEffect, useState } from 'react'
import '../../style/calendar-refactor.css'

type GridProps = {
    monthRange?: Array<{
        date: string,
        day: string
      }> | null
}

const CalendarGrid = (props: GridProps) => {
    const [start, setStart] = useState(0)
    
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

    useEffect(()=> {
        let dates = []
        
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
    }, [start])
    
    return (
        <div className="calendar-grid">
            <div className="row" id="week-one">
                <div className="square" id="1">

                </div>
                <div className="square" id="2">

                </div>
                <div className="square" id="3">

                </div>
                <div className="square" id="4">

                </div>
                <div className="square" id="5">

                </div>
                <div className="square" id="6">

                </div>
                <div className="square" id="7">

                </div>
            </div>
            <div className="row" id="week-two">
                <div className="square" id="8">

                </div>
                <div className="square" id="9">

                </div>
                <div className="square" id="10">

                </div>
                <div className="square" id="11">

                </div>
                <div className="square" id="12">

                </div>
                <div className="square" id="13">

                </div>
                <div className="square" id="14">

                </div>
            </div>
            <div className="row" id="week-three">
                <div className="square" id="15">

                </div>
                <div className="square" id="16">

                </div>
                <div className="square" id="17">

                </div>
                <div className="square" id="18">

                </div>
                <div className="square" id="19">

                </div>
                <div className="square" id="20">

                </div>
                <div className="square" id="21">

                </div>
            </div>
            <div className="row" id="week-four">
                <div className="square" id="22">

                </div>
                <div className="square" id="23">

                </div>
                <div className="square" id="24">

                </div>
                <div className="square" id="25">

                </div>
                <div className="square" id="26">

                </div>
                <div className="square" id="27">

                </div>
                <div className="square" id="28">

                </div>
            </div>
            <div className="row" id="week-five">
                <div className="square" id="29">

                </div>
                <div className="square" id="30">

                </div>
                <div className="square" id="31">

                </div>
                <div className="square" id="32">

                </div>
                <div className="square" id="33">

                </div>
                <div className="square" id="34">

                </div>
                <div className="square" id="35">

                </div>
            </div>
            {props.monthRange ?
                props.monthRange.length > 30 && start > 3?
                    <div className="row" id="week-six">
                        <div className="square" id="36">
        
                        </div>
                        <div className="square" id="37">
        
                        </div>
                        <div className="square" id="38">
        
                        </div>
                        <div className="square" id="39">
        
                        </div>
                        <div className="square" id="40">
        
                        </div>
                        <div className="square" id="41">
        
                        </div>
                        <div className="square" id="42">
        
                        </div>
                    </div> : null 
                : null
            }
        </div>
    )
}

export default CalendarGrid