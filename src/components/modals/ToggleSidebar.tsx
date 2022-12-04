import React, {Dispatch, SetStateAction, useEffect, useState, useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import ReactDOM from 'react-dom'
import '../../style/sidebar.css'

type ToggleProps = {
    thisStyle: React.CSSProperties,
    thisUser?: {
        handle: string,
        login: string,
        theme: string,
    } | null,
    isExpanded: boolean,
    setIsExpanded: Dispatch<SetStateAction<boolean>>
}

const ToggleSidebar = (props: ToggleProps) => {
    const theme = useContext(ThemeContext)
    const [toggleStyle, setToggleStyle] = useState(props.thisStyle)

    useEffect(()=> {
        let themes = Object.keys(theme)
        if (props.thisUser) {
          for (let i = 0; i < themes.length; i++) {
            if (themes[i] === props.thisUser.theme) {
              
              let thisTheme: any = theme[themes[i] as keyof Object]
  
              setToggleStyle({...toggleStyle, ...{"border": thisTheme.border}})
            }
          }
        }
    }, [props.thisUser, props.thisStyle])

    return ReactDOM.createPortal(
        <div className="toggle-btn" style={toggleStyle} onClick={()=> props.setIsExpanded(!props.isExpanded)}>
            T
        </div>,
        document.getElementById('sidebar-toggle-modal')!
    )
}

export default ToggleSidebar