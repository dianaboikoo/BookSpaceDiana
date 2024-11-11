import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import BookDescriptionPage from './pages/BookDescriptionPage';
import MyReviewsPage from './pages/MyReviewsPage';
import MyNotesPage from './pages/MyNotesPage';
import MyQuotesPage from './pages/MyQuotesPage';
import CommunityPage from "./pages/CommunityPage";
import StatisticsPage from "./pages/StatisticsPage";
import TimerPage from "./pages/TimerPage";
import NotePage from "./pages/NotePage";
import SearchPage from "./pages/SearchPage";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.DEV ? "/" : "/book-space-app/"}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);


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

          <Route path="/community" element={<CommunityPage />} />
         <Route path="/statistics" element={<StatisticsPage />} />
         <Route path="/timer" element={<TimerPage />} />
         <Route path="/note" element={<NotePage />} />
         <Route path="/search" element={<SearchPage />} />

        </Routes>
      </main>
    </Router>
  );
}

export default App;
