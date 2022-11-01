import React, { useEffect, useState } from 'react'
import { MovieType } from '../basic/Main'

type FavProps = {
  thisStyle: React.CSSProperties,
  thisUser?: {
    handle: string,
    login: string,
    theme: string,
    movies: Array<string>
  }
}

const Favs = (props: FavProps) => {
  const [theseMovies, setTheseMovies] = useState<Array<Object>>([])

  useEffect(()=> {
    console.log(theseMovies)

  }, [theseMovies])
  
  useEffect(()=> {
    /*
    let movieList:Array<Object> = []
    
    if (props.thisUser) {
      for (let i = 0; i < props.thisUser.movies.length; i++) {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
          }
        };
        //ABOVE need to store API key on the back end
        
        fetch(`https://movie-database-alternative.p.rapidapi.com/?s=${props.thisUser.movies[i]}&r=json&page=1`, options)
          .then(response => response.json())
          .then(response => {
            movieList.push(response.Search[0])
          })
          .catch(err => console.error(err));
      }
    }
    setTheseMovies(movieList)
    */
  }, [props.thisUser])

  return (
    <div className="fav-page">
      <h2 className="fav-head">Favorites Films</h2>
      <div className="fav-list">
        {theseMovies.map((movie: MovieType, index) => {
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