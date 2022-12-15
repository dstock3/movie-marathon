import { useEffect, useState } from 'react'

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState<Array<Object>>([])

  useEffect(()=> {
    //API call to get suggestions

    //setSuggestions(suggestions)

  }, [])

  return (
    <div className="suggestions-container">
      <h3>Suggestions</h3>
      <div className="suggestions">
        {suggestions && suggestions.map((suggestion: Object, index: number)=> {
          return ( 
            <div className="suggestion" key={index}>

            </div>
          )
        })}
      </div>
        
    </div>
  )
}

export default Suggestions