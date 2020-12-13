//#region PACKAGE IMPORTS
import React from 'react';
import Navbar from '../Navbar';
//#endregion

//#region STYLESHEET IMPORTS
import './Layout.style.scss';
//#endregion

const Layout = ({
  children,
  onSearchChange,
  searchValue,
  searchInputName,
  searchInputPlaceholder,
}) => {
  return (
    <>
      <Navbar
        onSearchChange={onSearchChange}
        searchValue={searchValue}
        searchInputName={searchInputName}
        searchInputPlaceholder={searchInputPlaceholder}
      />
      <div className="layoutContainer">
        <main className="contentContainer">{children}</main>
      </div>
    </>
  );
};

export default Layout;
