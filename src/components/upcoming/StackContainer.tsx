import React from 'react'
import FilmContainer from './FilmContainer'
import { StackContainerProps, Film } from '../../Types.types'

const StackContainer = (props: StackContainerProps) => {
    const handleClick = (ind: number):void => {

    }

    return (
        <li className="stack-info" id={props.stack.name} key={props.index} style={props.thisTheme} onClick={()=>handleClick(props.index)}>
            <div className="stack-name">{props.stack.name}</div>
            <div className="stack-desc">{props.stack.desc}</div>
            <div className="stack-container">
            {props.stack.lineup.map((film: Film, thisIndex) => {
                return (
                <FilmContainer index={thisIndex} film={film} />
                )
            })}
            </div>
        </li>
    )
}

export default StackContainer