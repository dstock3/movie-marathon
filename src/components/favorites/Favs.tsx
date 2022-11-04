import { MovieType, FavProps } from '../../Types.types'
import '../../style/favs.css'

const Favs = (props: FavProps) => {
  return (
    <div className="fav-page">
      <h2 className="fav-head">Favorites Films</h2>
      <div className="fav-list">
        {props.thisUser?.movies.map((movie: MovieType, index) => {
          return (
            <div className="movie-list-item" key={index}>
              <div className="movie-title">
                {movie.Title} ({movie.Year})
              </div>
              <img className="movie-img" src={movie.Poster} alt={movie.Title + "poster"}></img>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Favs