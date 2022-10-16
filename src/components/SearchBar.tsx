import React, { useEffect } from 'react'

type SearchProps = {
  thisStyle: React.CSSProperties,
  thisUser?: {
    handle: string,
    login: string,
    theme: string,
    searchData: Array<string>, 
  }
}

const SearchBar = (props: SearchProps) => {
  
  useEffect(()=> {
    if (props.thisUser) {


    }

  }, [props.thisUser])

  return (
    <div className="search-container">
        <img className="search-icon" alt="search icon"></img>
        <input className="search-input"></input>
    </div>
  )
}

export default SearchBar