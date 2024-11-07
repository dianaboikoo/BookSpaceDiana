import React from 'react';
import SearchBar from '../components/SearchBar';
import Banner from '../components/Banner';
import BookSection from '../components/BookSection';
import BottomNav from '../components/BottomNav';
import '../styles/HomePageStyle.css';

function HomePage() {
  return (
    <div className="home-page">
      <SearchBar />
      <Banner />
      <BookSection title="Currently Reading" />
      <BookSection title="Recommended" />
      <BookSection title="Popular" />
      <BottomNav />
    </div>
  );
}

export default HomePage;
