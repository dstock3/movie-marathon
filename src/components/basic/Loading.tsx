import { useState, useEffect, useContext } from 'react'
import '../../style/loading.css'
import { ThemeContext } from '../context/ThemeContext'
import { LoadingProps } from '../../Types.types'

const Loading = (props: LoadingProps) => {
  const theme = useContext(ThemeContext)
  const [loadingStyle, setLoadingStyle] = useState({})

  useEffect(() => {
    let themes = Object.keys(theme)

    if (props.thisUser) {
      for (let i = 0; i < themes.length; i++) {
        if (themes[i] === props.thisUser.theme) {
          
          let thisTheme: any = theme[themes[i] as keyof Object]
  
          setLoadingStyle({ "border": thisTheme.loading, "borderTop": thisTheme.loadingTop })
          
        }
      }
    }
  }, [props.thisUser, props.thisStyle])

  return (
    <div className="load-container">
      <div className="load" style={loadingStyle}></div>
    </div>
  )
}

export default Loading