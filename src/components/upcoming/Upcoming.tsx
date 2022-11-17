import React from 'react'
import { Stacks } from '../../Types.types'

const Upcoming = (props:Stacks) => {
  return (
    <div className="upcoming-stacks">
      {props.thisUser?.stacks ?
        <>
          <h2>Upcoming Stacks</h2>
          <ul className="stack-list">
    
          </ul>
        </> : null
      }
    </div>
  )
}

export default Upcoming