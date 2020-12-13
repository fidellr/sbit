//#region MODULE IMPORTS
import { fetchMovieListApi } from '../api-services';
import * as types from './actionTypes';
//#endregion

export const resetMovieList = () => (dispatch) => {
  dispatch({ type: types.RESET_MOVIE });
};

export const fetchMovieList = (searchQuery, page) => (dispatch) => {
  dispatch({
    type: types.FETCH_MOVIE_REQUESTING,
    payload: {
      searchValue: searchQuery,
    },
  });
  fetchMovieListApi(searchQuery, page)
    .then(({ data }) => {
      if (!data.Search) {
        dispatch({
          type: types.FETCH_MOVIE_FAILED,
          payload: {
            error: data.Error,
          },
        });
      } else {
        dispatch({
          type: types.FETCH_MOVIE_SUCCESS,
          payload: {
            searchValue: searchQuery,
            movies: data.Search,
            hasMore: data.Search.length > 5,
          },
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: types.FETCH_MOVIE_FAILED,
        payload: {
          error: err,
        },
      });
    });
};
