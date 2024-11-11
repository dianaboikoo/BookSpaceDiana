/*Made by Ola Ciesla*/
import React from "react";
import ChatItem from "./ChatItem";

function ChatList({ chats }) {
 return (
   <div className="chat-list">
     {chats.map((chat) => (
       <ChatItem key={chat.id} chat={chat} /> // Render each chat item
     ))}
   </div>
 );
}

export default ChatList;
