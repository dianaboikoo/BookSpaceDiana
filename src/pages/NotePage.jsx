import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/ChatandStatisticsStyle.css';


function NotePage() {
 const [activeTab, setActiveTab] = useState("Quote");
 const [notes, setNotes] = useState([]);
 const [isEditing, setIsEditing] = useState(false);
 const [editingNote, setEditingNote] = useState(null);
 const [newNoteContent, setNewNoteContent] = useState("");
 const [bookTitle, setBookTitle] = useState("");
 const [pageNumber, setPageNumber] = useState("");
 const navigate = useNavigate();


 useEffect(() => {
   fetchNotes();
 }, []);


 // Function to fetch notes from Firebase
 async function fetchNotes() {
   try {
     const response = await fetch(
       "https://bookspace-f063f-default-rtdb.firebaseio.com/notes.json"
     );
     const data = await response.json();


     // Convert Firebase object data to array format
     const fetchedNotes = data
       ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
       : [];
     setNotes(fetchedNotes);
   } catch (error) {
     console.error("Error fetching notes:", error);
   }
 }


 // Create a new note
 const createNote = async () => {
   if (!newNoteContent.trim() || !bookTitle.trim() || !pageNumber.trim())
     return;


   const newNote = {
     content: newNoteContent,
     type: activeTab.toLowerCase(),
     bookTitle,
     pageNumber,
     created_at: new Date().toLocaleString(),
   };


   try {
     const response = await fetch(
       "https://bookspace-f063f-default-rtdb.firebaseio.com/notes.json",
       {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newNote),
       }
     );
     if (response.ok) {
       fetchNotes();
     }
   } catch (error) {
     console.error("Error creating note:", error);
   }


   setNewNoteContent("");
   setBookTitle("");
   setPageNumber("");
 };


 // Start editing a note's content
 const startEditing = (note) => {
   setIsEditing(true);
   setEditingNote(note);
   setNewNoteContent(note.content);
   setBookTitle(note.bookTitle);
   setPageNumber(note.pageNumber);
 };


 // Save the edited note content
 const saveEdit = async () => {
   try {
     await fetch(
       `https://bookspace-f063f-default-rtdb.firebaseio.com/notes/${editingNote.id}.json`,
       {
         method: "PATCH",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
           content: newNoteContent,
           bookTitle,
           pageNumber,
         }),
       }
     );
     fetchNotes();
   } catch (error) {
     console.error("Error updating note:", error);
   }


   setIsEditing(false);
   setEditingNote(null);
   setNewNoteContent("");
   setBookTitle("");
   setPageNumber("");
 };


 // Delete a note
 const deleteNote = async (id) => {
   try {
     await fetch(
       `https://bookspace-f063f-default-rtdb.firebaseio.com/notes/${id}.json`,
       {
         method: "DELETE",
       }
     );
     fetchNotes();
   } catch (error) {
     console.error("Error deleting note:", error);
   }
 };


 return (
   <div className="note-page-timer">
     {/* Header */}
     <header className="header">
       <button className="back-button" onClick={() => navigate(-1)}>
         ←
       </button>
       <button className="add-button" onClick={createNote}>
         Add
       </button>
     </header>


     {/* Tabs */}
     <div className="tabs">
       <button
         className={`tab ${activeTab === "Quote" ? "active" : ""}`}
         onClick={() => setActiveTab("Quote")}
       >
         Quote
       </button>
       <button
         className={`tab ${activeTab === "Note" ? "active" : ""}`}
         onClick={() => setActiveTab("Note")}
       >
         Note
       </button>
     </div>


     {/* Note List */}
     <div className="note-list-timer">
       {notes
         .filter((note) => note.type === activeTab.toLowerCase())
         .map((note) => (
           <div key={note.id} className="note-item">
             <p>
               <strong>Book Title:</strong> {note.bookTitle}
             </p>
             <p>
               <strong>Page:</strong> {note.pageNumber}
             </p>
             {isEditing && editingNote?.id === note.id ? (
               <input
                 type="text"
                 value={newNoteContent}
                 onChange={(e) => setNewNoteContent(e.target.value)}
               />
             ) : (
               <p>{note.content}</p>
             )}
             <span className="note-date">{note.created_at}</span>
             <button onClick={() => startEditing(note)}>Edit</button>
             <button onClick={() => deleteNote(note.id)}>Delete</button>
           </div>
         ))}
     </div>


     {/* Note Input */}
     {!isEditing && (
       <>
         <input
           type="text"
           className="note-input"
           placeholder="Book Title"
           value={bookTitle}
           onChange={(e) => setBookTitle(e.target.value)}
         />
         <input
           type="text"
           className="note-input"
           placeholder="Page Number"
           value={pageNumber}
           onChange={(e) => setPageNumber(e.target.value)}
         />
         <textarea
           className="note-input"
           placeholder={`Write a ${activeTab.toLowerCase()}`}
           value={newNoteContent}
           onChange={(e) => setNewNoteContent(e.target.value)}
         />
       </>
     )}


     {/* Save Edit Button */}
     {isEditing && editingNote && (
       <div className="edit-controls">
         <button onClick={saveEdit}>Save</button>
         <button onClick={() => setIsEditing(false)}>Cancel</button>
       </div>
     )}
   </div>
 );
}


export default NotePage;
