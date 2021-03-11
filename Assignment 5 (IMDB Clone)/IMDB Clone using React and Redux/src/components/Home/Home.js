import React from 'react';
import SearchBar from '../elements/SearchBar/SearchBar';
import ColGrid from '../elements/ColGrid/ColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import './Home.css';

const Home = ({ movies, loading, currentPage, totalPages, searchTerm, searchMovies, loadMoreMovies }) => (

  <div className="home">
      <div>
        <SearchBar callback={searchMovies} />
      </div>
    <div className="home-grid">
      <ColGrid
        header={searchTerm ? 'Search Result' : 'Popular Movies'}
        loading={loading}
      >
        {movies.map((element, i) => (
          <MovieThumb
            key={i}
            clickable={true}
            image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
            movieId={element.id}
            movieName={element.original_title}
          />
        ))}
      </ColGrid>
      {(currentPage <= totalPages && !loading) ?
        <LoadMoreBtn text="Load More" onClick={loadMoreMovies} />
        : null
      }
    </div>
  </div>
)

export default Home;