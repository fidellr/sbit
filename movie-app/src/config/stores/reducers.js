//#region MODULE IMPORTS
import * as types from './actionTypes';
//#endregion

const initialState = {
  searchValue: '',
  movies: null,
  error: null,
  isLoading: false,
  hasMore: true,
};

const movieFinderReducer = (state = initialState, { type, payload }) => {
  const actions = {
    [types.RESET_MOVIE]: () => {
      return {
        searchValue: '',
        movies: null,
        error: null,
        isLoading: false,
        hasMore: true,
      };
    },
    [types.FETCH_MOVIE_REQUESTING]: () => {
      return {
        ...state,
        error: null,
        isLoading: payload.searchValue !== state.searchValue ? true : false,
      };
    },
    [types.FETCH_MOVIE_SUCCESS]: () => {
      return {
        ...state,
        error: null,
        movies:
          state.searchValue !== payload.searchValue
            ? payload.movies
            : [...state.movies, ...payload.movies],
        isLoading: false,
        searchValue: payload.searchValue,
        hasMore: payload.hasMore,
      };
    },
    [types.FETCH_MOVIE_FAILED]: () => {
      return {
        ...state,
        error: payload.error,
        isLoading: false,
      };
    },
    DEFAULT: () => state,
  };

  return (actions[type] || actions.DEFAULT)();
};

export default movieFinderReducer;
