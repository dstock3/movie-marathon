import { useState, useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import ReactDOM from 'react-dom'
import { MenuProps } from '../../Types.types'
import '../../style/menu.css'

const Menu = (props: MenuProps) => {
    const theme = useContext(ThemeContext)
    const [menuStyle, setMenuStyle] = useState<React.CSSProperties | Object>({})

    useEffect(()=> {
        let themes = Object.keys(theme)
        if (props.thisUser) {
            for (let i = 0; i < themes.length; i++) {
                if (themes[i] === props.thisUser.theme) {
                    let thisTheme: any = theme[themes[i] as keyof Object]

                    setMenuStyle({
                        ...{borderLeft: thisTheme.border, borderBottom: thisTheme.border,},
                        ...props.thisStyle 
                    })
                }
            }
        }
    }, [])
    
    return ReactDOM.createPortal(
        <div className="menu-container" style={menuStyle}>
            <ul className="menu">
                <li className="menu-item">Profile</li>
                <li className="menu-item">Settings</li>
                <li className="menu-item">Logout</li>
            </ul>
        </div>,
        document.getElementById('menu-modal')!
  )
}

export default Menu