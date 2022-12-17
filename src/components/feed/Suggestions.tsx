import { useContext, useEffect, useState } from 'react'
import Loader from '../basic/Loader'
import { SuggestionsProps } from '../../Types.types'
import { ThemeContext } from '../context/ThemeContext'

const Suggestions = (props: SuggestionsProps) => {
  const [suggestions, setSuggestions] = useState<Array<Object>>([])
  const [suggestionContainerStyle, setSuggestionContainerStyle] = useState<React.CSSProperties | Object>({})
  const [suggestionHeadStyle, setSuggestionHeadStyle] = useState<React.CSSProperties | Object>({})
  const [suggestionStyle, setSuggestionStyle] = useState<React.CSSProperties | Object>({})
  const theme = useContext(ThemeContext)

  useEffect(()=> {
    //API call to get suggestions

    //setSuggestions(suggestions)

  }, [])

  useEffect(()=> {
    let themes = Object.keys(theme)

    if (props.thisUser) {
      for (let i = 0; i < themes.length; i++) {
        if (themes[i] === props.thisUser.theme) {
          
          let thisTheme: any = theme[themes[i] as keyof Object]

          setSuggestionContainerStyle({border: thisTheme.border})
          setSuggestionHeadStyle({borderBottom: thisTheme.border})
        }
      }
    }
  }, [props.thisStyle])

  return (
    <div className="suggestions-container" style={suggestionContainerStyle}>
      <h3 className="suggestion-head" style={suggestionHeadStyle}>Suggestions</h3>
      <div className="suggestions" >
        {suggestions.length > 0 ? suggestions.map((suggestion: Object, index: number)=> {
          return ( 
            <div className="suggestion" style={suggestionStyle} key={index}>

            </div>
          )
        }) : 
        <Loader thisUser={props.thisUser} thisStyle={props.thisStyle} isMini={true} /> }
      </div>
        
    </div>
  )
}

export default Suggestions