import {GET_MOVIE, CLEAR_MOVIE, SET_MOVIE_PERSISTED_STATE} from '../actions';

const defaultState = {
  movie: null,
  directors: [],
  loading: false
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case SET_MOVIE_PERSISTED_STATE:
      return {
        ...state,
        ...action.payload
      }
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload.movie,
        loading: false,
        directors: action.payload.directors
      }
    case CLEAR_MOVIE:
      return {
        ...state,
        movie: null,
        directors: []
      }
    default:
      return state;
  }
}