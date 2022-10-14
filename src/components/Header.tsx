import React from 'react'

type HeaderProps = {
  thisStyle: React.CSSProperties,
  thisUser: object | null
}

const Header = (props: HeaderProps) => {
  console.log(props.thisUser)

  return (
    <header 
      className="head-menu" 
      style={props.thisStyle}>


    
    
      
      
    </header>
  )
}

export default Header