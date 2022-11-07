import React, { useEffect, useState, useContext } from 'react'
import { ToolBarProps } from '../../Types.types'
import { ThemeContext } from '../context/ThemeContext'

const ToolBar = (props: ToolBarProps) => {
    const [toolbarStyle, setToolbarStyle] = useState<React.CSSProperties | Object>({})
    const [buttonStyle, setButtonStyle] = useState<React.CSSProperties | Object>({})
    const theme = useContext(ThemeContext)

    useEffect(()=> {
        let themes = Object.keys(theme)
        if (props.thisUser) {
          for (let i = 0; i < themes.length; i++) {
            if (themes[i] === props.thisUser.theme) {
              
              let thisTheme: any = theme[themes[i] as keyof Object]
  
              setToolbarStyle({...props.thisStyle, ...{borderBottom: thisTheme.border}})
              setButtonStyle({...props.thisStyle, ...{border: thisTheme.border}})
            }
          }
        }
    }, [props.thisUser, props.thisStyle])

    return (
        <div className="toolbar-container" style={toolbarStyle}>
            <div className="toolbar">
                <div className="toolbar-btn" style={buttonStyle}>
                    S
                </div>
                <div className="toolbar-btn" style={buttonStyle}>
                    P
                </div>
            </div>
        </div>
    )
}

export default ToolBar