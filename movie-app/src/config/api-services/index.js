//#region PACKAGE IMPORTS
import axios from 'axios';
//#endregion

//#region MODULE IMPORTS
import { API_KEY, BASE_URI, MOVIE_LIST_URI } from './constants';
//#endregion

export const fetchMovieListApi = (searchQuery = '', page = 1) =>
  axios.get(
    `${MOVIE_LIST_URI}?apikey=${API_KEY}&s=${searchQuery}&page=${page}`
  );

export const fetchMovieDetailApi = (id = '') =>
  axios.get(`${BASE_URI}?apikey=${API_KEY}&i=${id}&plot=full`);
