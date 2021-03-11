import React, { Component } from 'react';
import { API_URL, API_KEY } from '../../config';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import './Movie.css';

 class Movie extends Component {
     state = {
         movie: null,
         directors: [],
         loading: false
     }
     componentDidMount() {
        if (localStorage.getItem(`${this.props.match.params.movieId}`)) {
            const state = JSON.parse(localStorage.getItem(`${this.props.match.params.movieId}`));
            this.setState({...state});
        } else {
         this.setState({ loading: true })
         const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
         this.fetchItems(endpoint);
        }
     }

     fetchItems = endpoint => {
         fetch(endpoint)
         .then(result => result.json())
         .then(result => {
             if (result.status_code) {
                 this.setState({ loading: false })
             } else {
                 this.setState({ movie: result}, () => {
                     const endpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
                     fetch(endpoint)
                     .then(result => result.json())
                     .then(result => {
                         const directors = result.crew.filter( (member) => member.job === "Director");

                         this.setState({
                             directors,
                             loading: false
                         }, () => {
                            localStorage.setItem(`${this.props.match.params.movieId}`, JSON.stringify(this.state));
                         })
                     })
                 })
             }
         })
     }
     
    render() {
        return (
            <div className="rmdb-movie">
                {this.state.movie ? 
                    <div>
                        <Navigation movie={this.props.location.movieName} />
                        <MovieInfo movie={this.state.movie} directors={this.state.directors} />
                    </div>
                    : null}
            </div>
        )
    }
}
export default Movie;