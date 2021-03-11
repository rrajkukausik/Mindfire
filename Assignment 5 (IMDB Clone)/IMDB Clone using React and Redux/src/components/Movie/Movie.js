import React from 'react';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import './Movie.css';

const Movie = ({ movie, directors, actors, loading }) => (
  <div className="movie">
    {movie ?
      <div>
        <Navigation movie={movie.original_title} />
        <MovieInfo movie={movie} directors={directors} />
      </div>
      : null}
    {loading ? <h1>No movie found</h1> : null}
  </div>
)

export default Movie;