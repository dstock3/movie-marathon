import { SearchResultsProps } from '../../Types.types'
import Loader from '../basic/Loader'
import '../../style/search-results.css'
import { MovieType } from '../../Types.types'

const SearchResults = (props: SearchResultsProps) => {
  return (
    <div className="search-results-container">
        {props.responseData ? 
            <div className="search-results">
                {props.responseData.Search.map((movie:MovieType, index):JSX.Element => {
                    return (            
                        <div className="movie-list-item" key={index}>
                            <div className="movie-title">
                                {movie.Title} ({movie.Year})
                            </div>  
                            <img className="movie-img" src={movie.Poster} alt={movie.Title + "poster"}></img>
                        </div>
                    );
                })}
            </div> : 
            <Loader thisStyle={props.thisStyle} thisUser={props.thisUser} /> 
        }
    </div>
  )
}

export default SearchResults