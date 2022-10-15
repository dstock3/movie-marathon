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
    },
    isExpanded: boolean,
    setIsExpanded: Dispatch<SetStateAction<boolean>>
}

const ToggleSidebar = (props: ToggleProps) => {
    const theme = useContext(ThemeContext)
    const [toggleStyle, setToggleStyle] = useState(props.thisStyle)

    useEffect(()=> {
        if (props.thisUser) {
            if (props.thisUser.theme === "dark") {
                setToggleStyle({...toggleStyle, ...{"border": theme.dark.border}})
            } else if (props.thisUser.theme === "light") {
                setToggleStyle({...toggleStyle, ...{"border": theme.light.border}})
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