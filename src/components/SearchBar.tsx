import React, { useEffect } from 'react'

type SearchProps = {
  thisStyle: React.CSSProperties,
  thisUser?: {
    handle: string,
    login: string,
    theme: string,
    metadataIsAllowed: boolean,
    searchData: Array<string>, 
  }
}

const SearchBar = (props: SearchProps) => {
  
  useEffect(()=> {
    if (props.thisUser) {
      //change search icon depending on user theme


    }

  }, [props.thisUser])

  const handleSearch = () => {
    //When App API is developed, app post request in order to record search metadata (if user allows)

  }

  return (
    <div className="search-container">
        <img className="search-icon" alt="search icon" onClick={handleSearch}></img>
        <input className="search-input"></input>
    </div>
  )
}

export default SearchBar