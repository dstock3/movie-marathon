import React from 'react'

type FooterProps = {
    thisStyle: React.CSSProperties,
    thisUser?: {
      handle: string,
      login: string
    }
}

const Footer = (props: FooterProps) => {
  return (
    <footer className="main-footer" style={props.thisStyle} >
        Footer
    </footer>
  )
}

export default Footer