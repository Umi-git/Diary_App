// Modal.jsx
import React, { useState } from 'react';

const Modal = ({ onClose, onAddEntry, setMessage }) => {
  const [entry, setEntry] = useState({ title: '', content: '' }); // Removed imageUrl from state

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onAddEntry(entry);
    if (success) {
      setEntry({ title: '', content: '' }); // Reset form
      onClose(); // Close modal
    } else {
      setMessage("Only one entry allowed every 24 hours, please come back later.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-4xl mb-4 text-center text-red-500">1 entry per day allowed, further attempt will be ignored</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Title" 
            value={entry.title} 
            onChange={(e) => setEntry({ ...entry, title: e.target.value })} 
            className="border p-2 mb-2 w-full text-3xl" 
            required 
          />
          <textarea 
            placeholder="Content" 
            value={entry.content} 
            onChange={(e) => setEntry({ ...entry, content: e.target.value })} 
            className="border p-2 mb-2 w-full text-3xl" 
            required 
          />
          <button type="submit" className="bg-blue-600 text-white text-3xl px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
            Add
          </button>
        </form>
        <button onClick={onClose} className="mt-2 text-red-600 text-2xl">Exit</button>
      </div>
    </div>
  );
};

export default Modal;