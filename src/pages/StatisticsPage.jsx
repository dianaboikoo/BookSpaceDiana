import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import '../styles/ChatandStatisticsStyle.css';


function StatisticsPage() {
 const navigate = useNavigate();


 return (
   <div className="statistics-page">
     {/* Header */}
     <header className="header">
       <button className="back-button" onClick={() => navigate(-1)}>
         ←
       </button>
       <h1>Statistics</h1>
       <button className="edit-button">Edit</button>
     </header>


     {/* Tabs */}
     <div className="tabs">
       <button className="tab active">Daily</button>
       <button className="tab">Monthly</button>
       <button className="tab">Yearly</button>
     </div>


     {/* Goals Section */}
     <section className="goals-section">
       <h2>Goals</h2>
       <p>30 of 50 pages</p>
       <div className="progress-bar">
         <div className="progress" style={{ width: "60%" }}></div>
       </div>
     </section>


     {/* Statistics Section with Image */}
     <section className="statistics-section">
       <h2>Statistics</h2>
       <p>108 pages</p>
       <p>11 Oct - 18 Oct 2024</p>
       <div className="chart-container">
         <img
           src="/chart.png"
           alt="Statistics chart placeholder"
           className="chart-image"
         />
       </div>
     </section>


     {/* Challenge Section */}
     <section className="challenge-section">
       <h2>2024 Challenge</h2>
       <p>2 of 8 books</p>
       <div className="books-grid">
         <div
           className="book-cover"
           style={{ backgroundImage: "url('/path/to/book1.jpg')" }}
         ></div>
         <div
           className="book-cover"
           style={{ backgroundImage: "url('/path/to/book2.jpg')" }}
         ></div>
         <div className="book-cover empty"></div>
         <div className="book-cover empty"></div>
         <div className="book-cover empty"></div>
         <div className="book-cover empty"></div>
         <div className="book-cover empty"></div>
       </div>
     </section>

     <BottomNav />
   </div>
 );
}


export default StatisticsPage;
