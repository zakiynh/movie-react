import { MOVIES, MOVIESID } from "../actions/actionType";

const initialState = {
  movies: [],
  movieid: []
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case MOVIESID:
      return {
        ...state,
        movieid: action.payload,
      };
    default:
      return state;
  }
}
