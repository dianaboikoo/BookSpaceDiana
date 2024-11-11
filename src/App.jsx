import { Route, Routes } from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import BookDescriptionPage from "./pages/BookDescriptionPage";
import CommunityPage from "./pages/CommunityPage";
import HomePage from "./pages/HomePage";
import MyNotesPage from "./pages/MyNotesPage";
import MyQuotesPage from "./pages/MyQuotesPage";
import MyReviewsPage from "./pages/MyReviewsPage";
import NotePage from "./pages/NotePage";
import SearchPage from "./pages/SearchPage";
import StatisticsPage from "./pages/StatisticsPage";
import TimerPage from "./pages/TimerPage";


function App() {
  return (
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
  );
}

export default App;
