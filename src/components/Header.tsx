import React from 'react'

type HeaderProps = {
  thisStyle: React.CSSProperties,
  thisUser?: {
    handle: string,
    login: string
  }
}

const Header = (props: HeaderProps) => {
  return (
    <header 
      className="head-menu" 
      style={props.thisStyle}>
      
      {props.thisUser? <div>Welcome {props.thisUser.handle}!</div>: null}

    </header>
  )
}

export default Header