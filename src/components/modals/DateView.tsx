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
        let body = document.querySelector("body")
        if (body) {
            body.style.backgroundColor = "black"
            body.style.transition = "all 0.25s ease-out"
            body.style.opacity = "1"
            body.style.zIndex = "1000"

        }

    }, [])
    
    useEffect(()=> {
        if (props.dateViewEnabled.id) {
            const dateElement = document.getElementById(String(props.dateViewEnabled.id))
            setDate(dateElement?.firstChild?.textContent)
        }
    }, [props.dateViewEnabled])

    useEffect(()=> {
        if (props.thisUser) {
            if (props.thisUser.theme === "dark") {
                setDateStyle({...props.thisStyle, ...{"border": theme.dark.border}})

              } else if (props.thisUser.theme === "light") {
                setDateStyle({...props.thisStyle, ...{"border": theme.light.border}})

              } else if (props.thisUser.theme === "mint") {
                setDateStyle({...props.thisStyle, ...{"border": theme.mint.border}})

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