//#region PACKAGE IMPORTS
import React from 'react';
//#endregion

const routes = [
  {
    name: 'Movie List',
    exact: true,
    path: '/',
    component: React.lazy(() => import('../../pages/MovieList')),
  },
  {
    name: 'Movie Detail',
    exact: true,
    path: '/detail/:id',
    component: React.lazy(() => import('../../pages/MovieDetail')),
  },
];

export default routes;
