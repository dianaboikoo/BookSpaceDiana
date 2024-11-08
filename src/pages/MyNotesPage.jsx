import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { useNavigate } from 'react-router-dom';

const DATABASE_URL = "https://bookspace-f063f-default-rtdb.firebaseio.com/notes";

export default function MyNotesPage() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  // Fetch notes from the database initially
  const fetchNotes = async () => {
    try {
      const response = await fetch(`${DATABASE_URL}.json`);
      const data = await response.json();
      const notesArray = data
        ? Object.keys(data).map((id) => ({
            id,
            ...data[id],
          }))
        : [];
      setNotes(notesArray);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Add a note to the local state
  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  // Update a specific note in the local state
  const updateNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  // Delete a specific note from the local state
  const deleteNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  return (
    <section className="notes-page">
      <h2>My Notes</h2>
      <div className="toggle-container">
  <button className="toggle-button active">Notes</button>
  <button className="toggle-button" onClick={() => navigate('/myquotes')}>Quotes</button>
</div>


      <div className="note-list">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            addNote={addNote}
            updateNote={updateNote}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </section>
  );
}
