import ReactDOM from 'react-dom'
import { MenuProps } from '../../Types.types'
import '../../style/menu.css'

const Menu = (props: MenuProps) => {
    return ReactDOM.createPortal(
        <div className="menu-container">
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