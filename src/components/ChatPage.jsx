import React from "react";
import { useNavigate } from "react-router-dom"; // Assumes you're using react-router


function ChatPage() {
 const navigate = useNavigate();


 // Sample messages (you may want to fetch these from an API or use state for dynamic messages)
 const messages = [
   {
     id: 1,
     sender: "user",
     text: "Hey everyone! Anyone has a copy of The Night Circus they’d be willing to trade?",
   },
   {
     id: 2,
     sender: "other",
     name: "Eva Jensen",
     text: "I do! I can swap it for “Where the Crawdads Sing” if you’re interested?✌️",
   },
   {
     id: 3,
     sender: "user",
     text: "Perfect! I’ve actually been wanting to read that too. When are you free to meet up?😊",
   },
 ];


 return (
   <div className="chat-page">
     {/* Header */}
     <header className="chat-header">
       <button className="back-button" onClick={() => navigate(-1)}>
         ←
       </button>
       <h1>Aarhus Book Swap</h1>
       <button className="info-button">ℹ️</button>
     </header>


     {/* Chat Messages */}
     <div className="messages">
       {messages.map((message) => (
         <div
           key={message.id}
           className={`message ${
             message.sender === "user" ? "user-message" : "other-message"
           }`}
         >
           {message.sender === "other" && (
             <div className="message-sender">
               <img
                 src="path/to/avatar.jpg"
                 alt={message.name}
                 className="avatar"
               />
               <span className="sender-name">{message.name}</span>
             </div>
           )}
           <p>{message.text}</p>
         </div>
       ))}
     </div>


     {/* Input Area */}
     <footer className="input-area">
       <input type="text" placeholder="Aa" />
       <button className="emoji-button">😊</button>
       <button className="send-button">➤</button>
     </footer>
   </div>
 );
}


export default ChatPage;
