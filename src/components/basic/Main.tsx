import React from 'react'
import { ThemeContext } from '../context/ThemeContext'

type MainProps = {
    thisStyle: React.CSSProperties,
    thisUser?: {
      handle: string,
      login: string,
      theme: string,
    }
}

const Main = (props: MainProps) => {
  return (
    <main style={props.thisStyle}>
    

    </main>
  )
}

export default Main