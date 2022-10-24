import React, { useContext, useEffect, useState, Dispatch, SetStateAction  } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import ReactDOM from 'react-dom'
import '../../style/date-view.css'

type DateViewType = {
    dateViewEnabled: {
        "isOpen": boolean, 
        "id": number | null
    },
    thisStyle: React.CSSProperties,
    thisUser?: {
      handle: string,
      login: string,
      theme: string,
    },
    setDateViewEnabled: Dispatch<SetStateAction<{"isOpen": boolean, "id": number | null}>>
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

    return ReactDOM.createPortal(
        <div className="date-view" style={dateStyle}>
            <div className="date-controller">
                <h2 className="date-head">
                    {date}
                </h2>
                <div className="date-close" onClick={()=>props.setDateViewEnabled({"isOpen": false, "id": null})}>X</div>
            </div>
            <div className="date-view-body">

            </div>
        </div>,
        document.getElementById('date-view-modal')!
    )
}

export default DateView