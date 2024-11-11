/*Made by Ola Ciesla*/
import React from "react";

function ChatItem({ chat }) {
 return (
   <div className="chat-item">
     <img src={chat.image} alt={chat.name} className="chat-image" /> {/* Chat avatar */}
     <div className="chat-info">
       <div className="chat-header">
         <span className="chat-name">{chat.name}</span> {/* Chat name */}
         {chat.unread && <span className="unread-dot"></span>} {/* Unread indicator */}
       </div>
       <p className="chat-message">{chat.message}</p> {/* Last message */}
     </div>
     <span className="chat-time">{chat.time}</span> {/* Timestamp */}
   </div>
 );
}

export default ChatItem;
