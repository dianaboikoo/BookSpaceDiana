/*Made by Ola Ciesla*/
import React from "react";

function Tabs({ activeTab, setActiveTab }) {
 return (
   <div className="tabs">
     <button
       className={`tab ${activeTab === "Community" ? "active" : ""}`} // Highlights active tab
       onClick={() => setActiveTab("Community")} // Sets active tab to "Community"
     >
       Community
     </button>
     <button
       className={`tab ${activeTab === "Chat" ? "active" : ""}`} // Highlights active tab
       onClick={() => setActiveTab("Chat")} // Sets active tab to "Chat"
     >
       Chat
     </button>
   </div>
 );
}

export default Tabs;
