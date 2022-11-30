import React, { useEffect, useState, useContext } from 'react'
import FilmContainer from './FilmContainer'
import { StackContainerProps, Film } from '../../Types.types'
import { ThemeContext } from '../context/ThemeContext'

const StackContainer = (props: StackContainerProps):JSX.Element => {
    const [isActive, setIsActive] = useState(false)
    const [stackInfoStyle, setStackInfoStyle] = useState<React.CSSProperties | {}>({})
    const theme = useContext(ThemeContext)
    
    useEffect(()=> {
        if (isActive) {
            setStackInfoStyle({
                flexDirection: 'column',
                justifyContent: 'flex-start'
            })

        } else {
            setStackInfoStyle({
                flexDirection: 'row',
                justifyContent: 'space-between'
            })
        }
    }, [isActive])

    const handleClick = ():void => {
        setIsActive(!isActive)
    }

    return (
        <li className="stack-info" style={stackInfoStyle} id={props.stack.name} key={props.index} onClick={()=>handleClick()}>
            <div className="stack-info-subcontainer">
                <div className="stack-name">{props.stack.name}</div>
                <div className="stack-desc">{props.stack.desc}</div>
            </div>
            {!isActive ? <div className="down-arrow">Down</div>:null}

            <div className="stack-container">
            {isActive ? props.stack.lineup.map((film: Film, thisIndex):JSX.Element => {
                return (<FilmContainer index={thisIndex} film={film} />)
            }) : null}
            </div>
        </li>
    )
}

export default StackContainer