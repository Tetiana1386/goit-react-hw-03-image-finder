import React from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';

function Searchbar({ onHandleSubmit, onHandleChangeQuery, query }) {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onHandleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={onHandleChangeQuery}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
  onHandleChangeQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Searchbar;
