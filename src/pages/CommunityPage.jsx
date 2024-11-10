/*Made by Ola Ciesla*/
import { useEffect, useState } from "react";
/*import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ChatList from "../components/ChatList";*/
import BottomNav from "../components/BottomNav";
import '../styles/ChatandStatisticsStyle.css';



function CommunityPage() {
 const [activeTab, setActiveTab] = useState("Community");
 const [chats, setChats] = useState([]);
 const [isEditing, setIsEditing] = useState(false);
 const [editingChat, setEditingChat] = useState(null);
 const [newChatName, setNewChatName] = useState("");
 const [newMessage, setNewMessage] = useState("");


 useEffect(() => {
   fetchChats();
 }, []);


 // Function to fetch chats from Firebase
 async function fetchChats() {
   try {
     const response = await fetch(
       "https://bookspace-f063f-default-rtdb.firebaseio.com/chats.json"
     );
     const data = await response.json();


     // Firebase stores data as objects with keys, so we need to convert it to an array
     const fetchedChats = data
       ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
       : [];
     setChats(fetchedChats);
   } catch (error) {
     console.error("Error fetching chats:", error);
   }
 }


 // Create a new chat
 const createChat = async () => {
   if (!newChatName.trim() || !newMessage.trim()) return;


   const newChat = {
     name: newChatName,
     message: newMessage,
     time: new Date().toLocaleTimeString(),
     unread: true,
   };


   // Send new chat data to Firebase
   try {
     const response = await fetch(
       "https://bookspace-f063f-default-rtdb.firebaseio.com/chats.json",
       {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newChat),
       }
     );
     if (response.ok) {
       fetchChats(); // Fetch the updated chat list after adding a new chat
     }
   } catch (error) {
     console.error("Error creating chat:", error);
   }


   setNewChatName("");
   setNewMessage("");
 };


 // Start editing a chat's name
 const startEditing = (chat) => {
   setIsEditing(true);
   setEditingChat(chat);
   setNewChatName(chat.name);
 };


 // Save the edited chat name
 const saveEdit = async () => {
   const updatedChat = { ...editingChat, name: newChatName };


   try {
     await fetch(
       `https://bookspace-f063f-default-rtdb.firebaseio.com/chats/${editingChat.id}.json`,
       {
         method: "PATCH",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ name: newChatName }),
       }
     );
     fetchChats(); // Fetch the updated chat list after editing
   } catch (error) {
     console.error("Error updating chat:", error);
   }


   setIsEditing(false);
   setEditingChat(null);
   setNewChatName("");
 };


 // Delete a chat
 const deleteChat = async (id) => {
   try {
     await fetch(
       `https://bookspace-f063f-default-rtdb.firebaseio.com/chats/${id}.json`,
       {
         method: "DELETE",
       }
     );
     fetchChats(); // Fetch the updated chat list after deleting
   } catch (error) {
     console.error("Error deleting chat:", error);
   }
 };


 return (
   <div className="community-page">
     {/* Header */}
     <header className="header">
       <h1>Chats</h1>
       <div className="icons">
         <button
           onClick={() => setIsEditing(!isEditing)}
           className="icon edit-icon"
         >
           ✏️
         </button>
         <button
           onClick={() => setEditingChat(null)}
           className="icon create-icon"
         >
           📋
         </button>
       </div>
     </header>


     {/* Search Bar */}
     <div className="search-bar">
       <input type="text" placeholder="Search..." />
       <button className="search-icon">🔍</button>
     </div>


     {/* Tabs */}
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


     {/* Chat List */}
     <div className="chat-list">
       {chats.map((chat) => (
         <div key={chat.id} className="chat-item">
           <div className="chat-info">
             <div className="chat-header">
               {isEditing && editingChat?.id === chat.id ? (
                 <input
                   type="text"
                   value={newChatName}
                   onChange={(e) => setNewChatName(e.target.value)}
                 />
               ) : (
                 <span className="chat-name">{chat.name}</span>
               )}
               {chat.unread && <span className="unread-dot"></span>}
             </div>
             <p className="chat-message">{chat.message}</p>
           </div>
           <span className="chat-time">{chat.time}</span>
           <button onClick={() => startEditing(chat)}>Edit</button>
           <button onClick={() => deleteChat(chat.id)}>Delete</button>
         </div>
       ))}
     </div>


     {/* New Chat Form */}
     {!isEditing && (
       <div className="new-chat-form">
         <input
           type="text"
           placeholder="New Chat Name"
           value={newChatName}
           onChange={(e) => setNewChatName(e.target.value)}
         />
         <input
           type="text"
           placeholder="New Message"
           value={newMessage}
           onChange={(e) => setNewMessage(e.target.value)}
         />
         <button onClick={createChat}>Add Chat</button>
       </div>
     )}


     {/* Save Edit Button */}
     {isEditing && editingChat && (
       <div className="edit-controls">
         <button onClick={saveEdit}>Save</button>
         <button onClick={() => setIsEditing(false)}>Cancel</button>
       </div>
     )}

    <BottomNav />
   </div>
 );
}


export default CommunityPage;


