import React, { useState } from 'react'
import FilmContainer from './FilmContainer'
import { StackContainerProps, Film } from '../../Types.types'

const StackContainer = (props: StackContainerProps) => {
    const [isActive, setIsActive] = useState(false)

    const handleClick = ():void => {
        setIsActive(!isActive)
    }

    return (
        <li className="stack-info" id={props.stack.name} key={props.index} style={props.thisTheme} onClick={()=>handleClick()}>
            <div className="stack-name">{props.stack.name}</div>
            <div className="stack-desc">{props.stack.desc}</div>
            <div className="stack-container">
            {isActive ? props.stack.lineup.map((film: Film, thisIndex) => {
                return (
                <FilmContainer index={thisIndex} film={film} />
                )
            }) : null}
            </div>
        </li>
    )
}

export default StackContainer