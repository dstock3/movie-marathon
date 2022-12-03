import React, { useEffect, useState, useContext } from 'react'
import FilmContainer from './FilmContainer'
import { StackContainerProps, Film } from '../../Types.types'
import { ThemeContext } from '../context/ThemeContext'

const StackContainer = (props: StackContainerProps):JSX.Element => {
    const [isActive, setIsActive] = useState(false)
    const [stackInfoStyle, setStackInfoStyle] = useState<React.CSSProperties | {}>({})
    const theme = useContext(ThemeContext)
    const [stackRange, setStackRange] = useState<string | null>(null)

    useEffect(()=> {
        let themes = Object.keys(theme)
        if (props.thisUser) {
          for (let i = 0; i < themes.length; i++) {
            if (themes[i] === props.thisUser.theme) {
              
              let thisTheme: any = theme[themes[i] as keyof Object]
    
              setStackInfoStyle({"border": thisTheme.border, "color": thisTheme.text, backgroundColor: thisTheme.main})
            }
          }
        }
    }, [props.thisUser])
    
    const handleClick = ():void => {
        setIsActive(!isActive)
    }

    useEffect(()=> {
        if (props.stack) {
            let range = props.stack.lineup[0].Date + "-" + props.stack.lineup[props.stack.lineup.length-1].Date
            console.log(range)
            setStackRange(range)
            
            console.log(stackRange)
            
        }
    }, [])

    return (
        <li className="stack-info" style={stackInfoStyle} id={props.stack.name} key={props.index} onClick={()=>handleClick()}>
            <div className="stack-info-subcontainer">
                <div className="stack-name">{props.stack.name}</div>
                <div className="stack-desc">{props.stack.desc}</div>
            </div>
            <div className="stack-info-subcontainer-two">
                <div className="stack-range">{stackRange}</div>
            </div>


            
            {isActive ? 
                <div className="stack-container">
                    {props.stack.lineup.map((film: Film, thisIndex):JSX.Element => {
                        return (<FilmContainer index={thisIndex} film={film} />)
                    })}
                </div> : 
                <div className="open-stack">Open</div>
            }
        </li>
    )
}

export default StackContainer