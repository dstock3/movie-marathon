import React from 'react'
import { SearchResultsProps } from '../../Types.types'
import Loader from '../basic/Loader'

const SearchResults = (props: SearchResultsProps) => {
  return (
    <div className="search-results-container">
        {props.responseData ? 
            <div className="search-results">
                SearchResults
            </div> : 
            <Loader thisStyle={props.thisStyle} thisUser={props.thisUser} /> 
        }
    </div>
  )
}

export default SearchResults