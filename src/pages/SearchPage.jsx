import React, { useState } from "react";
import '../styles/ChatandStatisticsStyle.css';


function SearchPage() {
 const [activeTab, setActiveTab] = useState("Genres");
 const [isMoodOpen, setIsMoodOpen] = useState(false);
 const [isCharacterOpen, setIsCharacterOpen] = useState(false);


 const toggleMood = () => setIsMoodOpen((prev) => !prev);
 const toggleCharacter = () => setIsCharacterOpen((prev) => !prev);


 const genres = [
   "Romance",
   "Thriller",
   "Fiction",
   "Fantasy",
   "Drama",
   "Classics",
 ];


 return (
   <div className="search-page">
     {/* Search Bar */}
     <div className="search-bar">
       <input type="text" placeholder="Search..." />
       <button className="search-icon">🔍</button>
     </div>


     {/* Tabs for Genres and Filters */}
     <div className="tabs">
       <button
         className={`tab ${activeTab === "Genres" ? "active" : ""}`}
         onClick={() => setActiveTab("Genres")}
       >
         Genres
       </button>
       <button
         className={`tab ${activeTab === "Filters" ? "active" : ""}`}
         onClick={() => setActiveTab("Filters")}
       >
         Filters
       </button>
     </div>


     {/* Content based on active tab */}
     {activeTab === "Genres" ? (
       <div className="genres-grid">
         {genres.map((genre) => (
           <div key={genre} className="genre-card">
             <div className="genre-overlay">
               <span>{genre}</span>
             </div>
           </div>
         ))}
       </div>
     ) : (
       <div className="filters-list">
         {/* Mood & Emotions Section */}
         <div className="filter-item" onClick={toggleMood}>
           <div className="filter-header">
             <span>
               Books by <strong>Mood & Emotions</strong>
             </span>
             <span className="dropdown-icon">{isMoodOpen ? "▲" : "▼"}</span>
           </div>
           {isMoodOpen && (
             <div className="filter-content">
               <div className="filter-subitem">Emotional Tone</div>
               <div className="filter-subitem">Content Intensity</div>
               <div className="filter-subitem">Predictability & Style</div>
             </div>
           )}
         </div>


         {/* Character & Plot Section */}
         <div className="filter-item" onClick={toggleCharacter}>
           <div className="filter-header">
             <span>
               Books by <strong>Character & Plot</strong>
             </span>
             <span className="dropdown-icon">
               {isCharacterOpen ? "▲" : "▼"}
             </span>
           </div>
           {isCharacterOpen && (
             <div className="filter-content">
               <div className="filter-subitem">Character Complexity</div>
               <div className="filter-subitem">Plot Structure</div>
             </div>
           )}
         </div>
       </div>
     )}


     {/* Bottom Navigation */}
     <footer className="bottom-nav">
       <button className="nav-icon">🏠</button>
       <button className="nav-icon">💬</button>
       <button className="nav-icon">📊</button>
       <button className="nav-icon">👤</button>
     </footer>
   </div>
 );
}


export default SearchPage;


