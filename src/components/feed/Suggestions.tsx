import { useEffect, useState } from 'react'
import Loader from '../basic/Loader'
import { SuggestionsProps } from '../../Types.types'

const Suggestions = (props: SuggestionsProps) => {
  const [suggestions, setSuggestions] = useState<Array<Object>>([])

  useEffect(()=> {
    //API call to get suggestions

    //setSuggestions(suggestions)

  }, [])

  return (
    <div className="suggestions-container">
      <h3>Suggestions</h3>
      <div className="suggestions">
        {suggestions.length > 0 ? suggestions.map((suggestion: Object, index: number)=> {
          return ( 
            <div className="suggestion" key={index}>

            </div>
          )
        }) : 
        <Loader thisUser={props.thisUser} thisStyle={props.thisStyle} isMini={true} /> }
      </div>
        
    </div>
  )
}

export default Suggestions