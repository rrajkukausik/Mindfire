import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import './Home.css';
import SearchBar from '../elements/SearchBar/SearchBar';
import ColGrid from '../elements/ColGrid/ColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';


 class Home extends Component {
     state = {
        movies: [],
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: ''
     }

     
     componentDidMount() {
        if (localStorage.getItem('HomeState')) {
            const state = JSON.parse(localStorage.getItem('HomeState'));
            this.setState({...state});
        } else {
         this.setState({ loading: true});
         const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
         this.fetchItems(endpoint);
        }
     }

     searchItems= (searchTerm) => {
         let endpoint = '';
         this.setState({ 
             movies: [],
             loading: true,
             searchTerm
         })
         
         if (searchTerm === '') {
             endpoint =`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
         } else {
             endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
         }
         this.fetchItems(endpoint);
     }

     loadMoreItems = () => {
         let endpoint = '';
         this.setState({ loading: true });

         if (this.state.searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
        }
        this.fetchItems(endpoint);
    }

     fetchItems = (endpoint) => {
         fetch(endpoint)
         .then(result => result.json())
         .then(result => {
             this.setState({
                 movies: [...this.state.movies, ...result.results],
                 loading: false,
                 currentPage: result.page,
                 totalPages: result.total_pages
             }, () => {
                 localStorage.setItem('HomeState', JSON.stringify(this.state))
             });
         })
         .catch(error => console.error('Error', error))
     }
     

    render() {
        const { movies, loading, currentPage, totalPages, searchTerm } = this.state;
        return (
           <div className="rmdb-home">
           <div>
               <SearchBar callback={this.searchItems} />
           </div>
           <div className="rmdb-home-grid">
               <ColGrid
               header={searchTerm ? 'Search Result' : 'Trending Movies'}
               loading={loading}
               >
               {movies.map( (element, i) => {
                   return <MovieThumb
                            key={i}
                            clickable={true}
                            image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                            movieId={element.id}
                            movieName={element.original_title}
                            />
               })}
               </ColGrid>
               {(currentPage <= totalPages && !loading) ? <LoadMoreBtn text="Load More.." onClick={this.loadMoreItems} /> : null }
           </div>
           </div>
            
        )
    }
}
export default Home;