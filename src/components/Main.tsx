import React from 'react'
import { ThemeContext } from '../components/context/ThemeContext'

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
        Main

    </main>
  )
}

export default Main