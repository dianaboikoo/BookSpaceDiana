import React from 'react';
import { FiSearch } from 'react-icons/fi'; // Import the search icon
import { useNavigate } from 'react-router-dom';
import '../styles/HomePageStyle.css';

function SearchBar() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search'); // Navigates to the search page
  };

  return (
    <div className="search-bar-container" onClick={handleSearchClick}>
      <input type="text" className="search-bar" placeholder="Search..." />
      <FiSearch className="search-icon" />
    </div>
  );
}

export default SearchBar;