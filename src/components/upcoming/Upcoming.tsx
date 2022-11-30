import { useState, useEffect, useContext } from 'react'
import { Stacks, ThisStack } from '../../Types.types'
import { ThemeContext } from '../context/ThemeContext'
import '../../style/upcoming.css'
import StackContainer from './StackContainer'

const Upcoming = (props:Stacks) => {
  const theme = useContext(ThemeContext)
  const [thisTheme, setThisTheme] = useState<React.CSSProperties>({"border": theme.light.border})
  const [status, setStatus] = useState<{}>({})

  useEffect(()=> {
    if (props.thisUser?.stacks) {
      for (let prop in props.thisUser?.stacks) {
        console.log(props.thisUser?.stacks[prop].lineup)

      }
      //setStatus({})


    }
  }, [props.thisUser])

  useEffect(()=> {
    let themes = Object.keys(theme)
    if (props.thisUser) {
      for (let i = 0; i < themes.length; i++) {
        if (themes[i] === props.thisUser.theme) {
          
          let thisTheme: any = theme[themes[i] as keyof Object]

          setThisTheme({"border": thisTheme.border, "color": thisTheme.text})
        }
      }
    }
  }, [])


  return (
    <div className="upcoming-stacks">
      {props.thisUser?.stacks ?
        <>
          <h2 className="stacks-head">Upcoming Stacks</h2>
          <ul className="stack-list">
            {props.thisUser?.stacks.map((stack: ThisStack, index):JSX.Element  => {
              return (
                <StackContainer stack={stack} thisTheme={thisTheme} index={index} />
              )
            })}    
          </ul>
        </> : <div className="stack-msg">You don't currently have any stacks planned.</div>
      }
    </div>
  )
}

export default Upcoming