import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Make sure the path is correct
import BookDescriptionPage from './pages/BookDescriptionPage';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:bookId" element={<BookDescriptionPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
