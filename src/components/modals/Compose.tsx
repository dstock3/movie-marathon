import React, { useEffect, useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import '../../style/compose.css'
import { ComposeProps } from '../../Types.types'
import { ThemeContext } from '../context/ThemeContext'

const Compose = (props: ComposeProps) => {
    const theme = useContext(ThemeContext)
    const [composeStyle, setComposeStyle] = useState<React.CSSProperties | Object>({})
    const [closeStyle, setCloseStyle] = useState<React.CSSProperties | Object>({})
    
    /*need to create useEffect hook to handle POST request

    useEffect(()=> {

    }, [])
    */

    useEffect(()=> {
        let themes = Object.keys(theme)
        if (props.thisUser) {
            for (let i = 0; i < themes.length; i++) {
                if (themes[i] === props.thisUser.theme) {
                    let thisTheme: any = theme[themes[i] as keyof Object]
            
                    setComposeStyle({
                        ...composeStyle, 
                        ...{border: thisTheme.border},
                        ...props.thisStyle 
                    })

                    setCloseStyle({
                        ...closeStyle,
                        ...{color: thisTheme.text},
                    })
                }
            }
        }
    }, [])


    return ReactDOM.createPortal(
        <div className="compose" style={composeStyle}>
            <div className="compose-button-container">
                <div className="compose-close" style={closeStyle} onClick={()=>props.setTimeToPost(false)}>x</div>
            </div>
            <form className="compose-form">
                <input className="compose-input" placeholder='What movies have your watched recently? Share your thoughts with friends.'>
                </input>
            </form>
            <div className="compose-button-container">
                <div className="compose-enter" style={closeStyle}>Confirm</div>
            </div>
        </div>,
        document.getElementById('compose-modal')!
    )
}

export default Compose