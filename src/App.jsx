import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import BookDescriptionPage from './pages/BookDescriptionPage';
import MyReviewsPage from './pages/MyReviewsPage';
import MyNotesPage from './pages/MyNotesPage';
import MyQuotesPage from './pages/MyQuotesPage';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:bookId" element={<BookDescriptionPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/myreviews" element={<MyReviewsPage />} />
          <Route path="/mynotes" element={<MyNotesPage />} />
          <Route path="/myquotes" element={<MyQuotesPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
