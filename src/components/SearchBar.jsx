import React from 'react';
import { FiSearch } from 'react-icons/fi'; // Import the search icon
import '../styles/HomePageStyle.css';

function SearchBar() {
  return (
    <div className="search-bar-container">
      <input type="text" className="search-bar" placeholder="Search..." />
      <FiSearch className="search-icon" />
    </div>
  );
}

export default SearchBar;
