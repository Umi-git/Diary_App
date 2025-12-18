import React, { useState } from 'react';

const EntryForm = ({ onAddEntry, onClose }) => {
  const [newEntry, setNewEntry] = useState({ title: '', date: '', imageUrl: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry(prevEntry => ({ ...prevEntry, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEntry(newEntry);
    setNewEntry({ title: '', date: '', imageUrl: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={newEntry.title} onChange={handleInputChange} required placeholder="Title" />
      <input type="date" name="date" value={newEntry.date} onChange={handleInputChange} required />
      <input type="url" name="imageUrl" value={newEntry.imageUrl} onChange={handleInputChange} required placeholder="Image URL" />
      <textarea name="content" value={newEntry.content} onChange={handleInputChange} required placeholder="Content"></textarea>
      <button type="submit">Save Entry</button>
    </form>
  );
};

export default EntryForm;