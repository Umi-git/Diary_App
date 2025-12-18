// App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import EntryList from './components/EntryList'; // Assuming you have this component
import Modal from './components/Modal'; // Import your modal component

const App = () => {
  const [entries, setEntries] = useState([]); // State for diary entries
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [message, setMessage] = useState(''); // State for message to show user

  // Function to open the modal
  const openAddEntryModal = () => {
    setIsModalOpen(true); // Show the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Hide the modal
    setMessage(''); // Reset message on close
  };

  // Function to add a new entry
  const addEntry = (entry) => {
    const now = new Date().getTime(); // Get current timestamp
    const lastEntryTimestamp = entries.length > 0 ? new Date(entries[entries.length - 1].timestamp).getTime() : null;

    // Check if 24 hours have passed since the last entry
    if (lastEntryTimestamp && (now - lastEntryTimestamp < 24 * 60 * 60 * 1000)) {
      setMessage("Only one entry allowed every 24 hours, please come back later."); // Set message if entry exists
      return false; // Indicate failure to add entry
    } else {
      // Add new entry with the current timestamp and fixed image URL
      const newEntry = {
        ...entry,
        timestamp: now, // Store the current timestamp
        imageUrl: 'https://ideogram.ai/assets/image/lossless/response/Tz911nc9SwKvSyKn0LBz1A' // Fixed image URL
      };
      setEntries((prevEntries) => [...prevEntries, newEntry]); // Add new entry to state
      setMessage(''); // Clear any existing message
      return true; // Indicate success
    }
  };

  return (
    <div>
      <Header onAddEntry={openAddEntryModal} /> {/* Passing the function as a prop */}
      <EntryList entries={entries} onAddEntry={openAddEntryModal} /> {/* Render your list of entries */}
      {isModalOpen && <Modal onClose={closeModal} onAddEntry={addEntry} setMessage={setMessage} />} {/* Render modal if open */}
      {message && <p className="text-red-500 text-center">{message}</p>} {/* Display message if exists */}
    </div>
  );
};

export default App;