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

      let themes = Object.keys(theme)
      if (props.thisUser) {
        for (let i = 0; i < themes.length; i++) {
          if (themes[i] === props.thisUser.theme) {
            
            let thisTheme: any = theme[themes[i] as keyof Object]

            setSearchStyle({borderTop: thisTheme.border, borderBottom: thisTheme.border})
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
        <img className="search-icon" alt="search icon" onClick={handleSearch}></img>
        <input className="search-input" value={searchInput} onChange={e => setSearchInput(e.target.value)}></input>
    </div>
  )
}

export default SearchBar