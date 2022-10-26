import React, { useContext, useEffect, useState, Dispatch, SetStateAction  } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import ReactDOM from 'react-dom'
import '../../style/date-view.css'
import { DateViewEnabledType } from '../../App'

type DateViewType = {
    thisStyle: React.CSSProperties,
    thisUser?: {
      handle: string,
      login: string,
      theme: string,
    },
    dateViewEnabled: DateViewEnabledType,
    setDateViewEnabled: Dispatch<SetStateAction<DateViewEnabledType>>,
    changeMonth: (directive: string) => void,
}

const DateView = (props: DateViewType) => {
    const theme = useContext(ThemeContext)
    const [date, setDate] = useState<string | undefined | null>(null)
    const [dateStyle, setDateStyle] = useState<React.CSSProperties>(props.thisStyle)
    
    useEffect(()=> {
        if (props.dateViewEnabled.id) {
            const dateElement = document.getElementById(String(props.dateViewEnabled.id))
            setDate(dateElement?.firstChild?.textContent)
        }
    }, [props.dateViewEnabled])

    useEffect(()=> {
        let themes = Object.keys(theme)
        if (props.thisUser) {
          for (let i = 0; i < themes.length; i++) {
            if (themes[i] === props.thisUser.theme) {
              
              let thisTheme: any = theme[themes[i] as keyof Object]
  
              setDateStyle({...props.thisStyle, ...{"border": thisTheme.border}})
            }
          }
        }
    }, [props.thisUser])

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
                <h2 className="date-head">
                    {date}
                </h2>
                <div className="date-close" onClick={()=>props.setDateViewEnabled({"isOpen": false, "id": null})}>X</div>
            </div>
            <div className="date-view-body-container">
                <div className="date-view-back">
                    <svg className="back-icon" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <path id="date-back" d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"/>
                    </svg>
                </div>
                <div className="date-view-body">

                </div>
                <div className="date-view-forward">
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