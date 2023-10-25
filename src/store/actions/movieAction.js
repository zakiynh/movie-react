import { MOVIES, PRICE, MOVIESID } from "./actionType";
const BASE_URL = "http://www.omdbapi.com/?apikey=3ec273a4"
import axios from 'axios';

export const movies = () => {
  return {
    type: MOVIES,
  };
};

export function getAllMovies(title) {
  return async (dispatch) => {
    axios.get(`${BASE_URL}&s=${title}`)
      .then((response) => {
        dispatch({ type: MOVIES, payload: response.data.Search });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getMovieById(imdbID) {
 return async (dispatch) => {
    axios.get(`${BASE_URL}&i=${imdbID}`)
    .then((response) => {
        dispatch({ type: MOVIESID, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
 }
}

export const setPrice = (price) => {
  return {
    type: PRICE,
    payload: price,
  };
}