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
      //change search icon depending on user theme

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
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path id="search-path" d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"/>
          </svg>
        </div>

        <input className="search-input" value={searchInput} onChange={e => setSearchInput(e.target.value)}></input>
    </div>
  )
}

export default SearchBar