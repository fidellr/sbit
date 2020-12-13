//#region PACKAGE IMPORTS
import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//#endregion

//#region MODULE IMPORTS
import reducers from './reducers';
//#endregion

const initStore = (initialState) => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export const useStore = (initialState) => {
  const store = useMemo(() => initStore(initialState), [initialState]);
  return store;
};
