import React from "react";



function ChatItem({ chat }) {
 return (
   <div className="chat-item">
     <img src={chat.image} alt={chat.name} className="chat-image" />
     <div className="chat-info">
       <div className="chat-header">
         <span className="chat-name">{chat.name}</span>
         {chat.unread && <span className="unread-dot"></span>}
       </div>
       <p className="chat-message">{chat.message}</p>
     </div>
     <span className="chat-time">{chat.time}</span>
   </div>
 );
}


export default ChatItem;