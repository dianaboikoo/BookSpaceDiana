import React from "react";


function Tabs({ activeTab, setActiveTab }) {
 return (
   <div className="tabs">
     <button
       className={`tab ${activeTab === "Community" ? "active" : ""}`}
       onClick={() => setActiveTab("Community")}
     >
       Community
     </button>
     <button
       className={`tab ${activeTab === "Chat" ? "active" : ""}`}
       onClick={() => setActiveTab("Chat")}
     >
       Chat
     </button>
   </div>
 );
}


export default Tabs;