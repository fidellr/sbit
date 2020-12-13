//#region PACKAGE IMPORTS
import React, { useCallback, useEffect, useState } from 'react';
//#endregion

//#region MODULE IMPORTS
import Layout from '../../components/Layout';
import LoadingSpinner from '../../components/LoadingSpinner';
//#endregion

//#region CONFIG IMPORTS
import { fetchMovieDetailApi } from '../../config/api-services';
//#endregion

//#region STYLESHEET IMPORTS
import './MovieDetail.style.scss';
//#endregion

const MovieDetailPage = ({ location }) => {
  //#region ROUTE
  const urls = location.pathname.split('/');
  const id = urls[urls.length - 1];
  //#endregion

  //#region STATE
  const [movieDetail, setMovieDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //#endregion

  //#region API CALL
  const fetchMovieDetail = useCallback(async () => {
    setIsLoading(true);
    const { data } = await fetchMovieDetailApi(id);
    setMovieDetail(data);
    setIsLoading(false);
  }, [id]);
  //#endregion

  //#region LIFECYCLE
  useEffect(() => {
    fetchMovieDetail();
  }, [fetchMovieDetail]);
  //#endregion

  //#region RENDERER
  const renderPageContent = () => {
    if (isLoading) {
      return (
        <div className="loadingWrapper">
          <LoadingSpinner />
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <>
        <div
          className="poster"
          style={{ backgroundImage: `url('${movieDetail.Poster}')` }}
        />
        <div className="details">
          <div className="detailContentContainer">
            <p>IMDB Rating: </p>
            <p>{movieDetail.imdbRating}</p>
          </div>
          <div className="detailContentContainer">
            <p>Title: </p>
            <p>{movieDetail.Title}</p>
          </div>
          <div className="detailContentContainer">
            <p>Country: </p>
            <p>{movieDetail.Country}</p>
          </div>
          <div className="detailContentContainer">
            <p>Actors: </p>
            <p>{movieDetail.Actors}</p>
          </div>
          <div className="detailContentContainer">
            <p>Awards: </p>
            <p>{movieDetail.Awards}</p>
          </div>
          <div className="detailContentContainer">
            <p>Released Year: </p>
            <p>{movieDetail.Year}</p>
          </div>
          <div className="detailContentContainer">
            <p>Genre: </p>
            <p>{movieDetail.Genre}</p>
          </div>
        </div>
      </>
    );
  };
  //#endregion

  return (
    <Layout>
      <div className="movieDetailWrapper">{renderPageContent()}</div>
    </Layout>
  );
};

export default MovieDetailPage;
