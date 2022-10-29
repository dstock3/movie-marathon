import React, { useState, useEffect, Dispatch, SetStateAction, useContext } from 'react'
import { ResponseDataType } from '../App'
import { ThemeContext } from '../components/context/ThemeContext'

type SearchProps = {
  thisStyle: React.CSSProperties,
  thisUser?: {
    handle: string,
    login: string,
    theme: string,
    metadataIsAllowed: boolean,
    searchData: Array<string>,
  },
  setResponseData: Dispatch<SetStateAction<ResponseDataType | null>>
}

const SearchBar = (props: SearchProps) => {
  const [searchInput, setSearchInput] = useState("");
  const theme = useContext(ThemeContext)
  const [searchStyle, setSearchStyle] = useState<React.CSSProperties>({});
  
  useEffect(()=> {
    if (props.thisUser) {
      let icon = document.getElementById("search-path")

      let themes = Object.keys(theme)
      if (props.thisUser) {
        for (let i = 0; i < themes.length; i++) {
          if (themes[i] === props.thisUser.theme) {
            
            let thisTheme: any = theme[themes[i] as keyof Object]

            setSearchStyle({borderTop: thisTheme.border, borderBottom: thisTheme.border})
            icon?.setAttribute("fill", thisTheme.text)
          }
        }
      }
    }
  }, [props.thisUser])

  const handleSearch = () => {

    //When App API is developed, app post request in order to record search metadata (if user allows), e.g. if props.thisUser.metadataIsAllowed...
    /*
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
      }
    };
    //ABOVE need to store API key on the back end
    
    fetch(`https://movie-database-alternative.p.rapidapi.com/?s=${searchInput}&r=json&page=1`, options)
      .then(response => response.json())
      .then(response => {
        props.setResponseData(response)})
      .catch(err => console.error(err));
      */
  }

  return (
    <div className="search-container" style={searchStyle}>
        <div className="search-icon" onClick={handleSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path id="search-path" d="m19.55 21.95-6.475-6.475q-.725.5-1.687.8-.963.3-2.088.3-2.95 0-5.012-2.063Q2.225 12.45 2.225 9.5q0-2.95 2.063-5.013Q6.35 2.425 9.3 2.425q2.95 0 5.012 2.062Q16.375 6.55 16.375 9.5q0 1.15-.3 2.087-.3.938-.8 1.638l6.5 6.525ZM9.3 13.425q1.65 0 2.788-1.138 1.137-1.137 1.137-2.787t-1.137-2.788Q10.95 5.575 9.3 5.575T6.513 6.712Q5.375 7.85 5.375 9.5t1.138 2.787Q7.65 13.425 9.3 13.425Z"/>
          </svg>
        </div>
        
        <input className="search-input" value={searchInput} onChange={e => setSearchInput(e.target.value)}></input>
    </div>
  )
}

export default SearchBar