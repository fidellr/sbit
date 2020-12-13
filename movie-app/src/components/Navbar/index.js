//#region PACKAGE IMPORTS
import React from 'react';
import { useHistory, useLocation } from 'react-router';
//#endregion

//#region MODULE IMPORTS
import SearchInput from '../SearchInput';
//#endregion

//#region STYLESHEET IMPORTS
import './Navbar.style.scss';
//#endregion

const Navbar = ({
  onSearchChange,
  searchValue,
  searchInputName,
  searchInputPlaceholder,
}) => {
  //#region ROUTE
  const history = useHistory();
  const location = useLocation();
  const isMovieListPage = location.pathname === '/';
  //#endregion

  //#region HANDLER
  const redirectToMovieListPage = () => {
    history.push('/');
  };
  //#endregion

  return (
    <nav className="navbarContainer">
      <div className="navbarWrapper">
        <p className="logo" onClick={redirectToMovieListPage}>
          Movie Finder.
        </p>
        {isMovieListPage && (
          <SearchInput
            onChange={onSearchChange}
            value={searchValue}
            name={searchInputName}
            placeholder={searchInputPlaceholder}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
