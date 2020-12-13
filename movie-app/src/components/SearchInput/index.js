//#region PACKAGE IMPORTS
import React from 'react';
//#endregion

//#region STYLESHEET IMPORTS
import './SearchInput.style.scss';
//#endregion

const SearchInput = ({ onChange, value, name, placeholder }) => {
  return (
    <input
      className="searchInput"
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
