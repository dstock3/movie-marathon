import React from 'react'

type MainProps = {
    thisStyle: React.CSSProperties,
    thisUser?: {
      handle: string,
      login: string
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