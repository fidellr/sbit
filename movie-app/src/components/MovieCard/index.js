//#region PACKAGE IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';
//#endregion

//#region STYLESHEET IMPORTS
import './MovieCard.style.scss';
//#endregion

const MovieCard = ({
  image,
  onClickImage,
  releasedYear,
  filmType,
  title,
  id,
}) => {
  return (
    <div className="cardContainer">
      <div
        className="poster"
        onClick={onClickImage}
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="cardDetailsContainer">
        <Link to={`/detail/${id}`}>
          <p className="title">Title: {title}</p>
        </Link>
        <p className="releasedYear">Released Year: {releasedYear}</p>
        <p className="filmType">Type: {filmType}</p>
      </div>
    </div>
  );
};

export default MovieCard;
