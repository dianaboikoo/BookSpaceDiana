import React, { useState } from "react";
import PropTypes from "prop-types";

const DATABASE_URL = "https://bookspace-f063f-default-rtdb.firebaseio.com/notes";

const NoteCard = ({ note, addNote, updateNote, deleteNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(note.content);
  const [editedTitle, setEditedTitle] = useState(note.bookTitle || ""); // Editable book title
  const [editedPageNumber, setEditedPageNumber] = useState(note.pageNumber || ""); // Editable page number
  const [newNoteContent, setNewNoteContent] = useState("");

  // Add a new note
  const handleAddNote = async () => {
    if (!newNoteContent.trim()) return;
    try {
      const newNote = { content: newNoteContent, type: "note", created_at: new Date().toISOString() };
      const response = await fetch(`${DATABASE_URL}.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote),
      });
      if (!response.ok) throw new Error("Failed to add note");
      const data = await response.json();
      addNote({ id: data.name, ...newNote }); // Add new note to local state
      setNewNoteContent(""); // Clear input field
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Update note content, title, and page number
  const handleUpdateNote = async () => {
    try {
      const updatedNote = {
        content: editedContent,
        bookTitle: editedTitle,
        pageNumber: editedPageNumber,
        updated_at: new Date().toISOString(),
      };

      const response = await fetch(`${DATABASE_URL}/${note.id}.json`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedNote),
      });
      if (!response.ok) throw new Error("Failed to update note");
      updateNote({ ...note, ...updatedNote }); // Update note in local state
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  // Delete note
  const handleDeleteNote = async () => {
    try {
      const response = await fetch(`${DATABASE_URL}/${note.id}.json`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete note");
      deleteNote(note.id); // Remove note from local state
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="note-card">
      <div className="note-header">
        <div className="note-info">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                placeholder="Edit Title"
                className="edit-input"
              />
              <input
                type="number"
                value={editedPageNumber}
                onChange={(e) => setEditedPageNumber(Number(e.target.value))}
                placeholder="Edit Page Number"
                className="edit-input"
              />
            </>
          ) : (
            <>
              <p className="note-title">{note.bookTitle || "Untitled Note"}</p>
              <p className="note-page">Page {note.pageNumber || "N/A"}</p>
            </>
          )}
          <p className="note-time">{new Date(note.created_at).toLocaleString()}</p>
        </div>
        <button className="edit-note-button" onClick={() => setIsEditing(!isEditing)}>
          ✏️
        </button>
        <button className="delete-note-button" onClick={handleDeleteNote}>
          🗑️
        </button>
      </div>
      {isEditing ? (
        <div className="edit-note-content">
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            placeholder="Edit your note"
          />
          <button onClick={handleUpdateNote}>Save</button>
        </div>
      ) : (
        <p className="note-content">{note.content}</p>
      )}
      {/* Input for adding a new note */}
      <div>
        <input
          type="text"
          value={newNoteContent}
          onChange={(e) => setNewNoteContent(e.target.value)}
          placeholder="Write a new note"
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
    </div>
  );
};

NoteCard.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    bookTitle: PropTypes.string,
    pageNumber: PropTypes.number,
  }).isRequired,
  addNote: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default NoteCard;
