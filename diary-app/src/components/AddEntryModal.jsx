// AddEntryModal.jsx
import React, { useState } from 'react';

const AddEntryModal = ({ isOpen, onClose, onAddEntry }) => {
    const [formData, setFormData] = useState({ title: '', date: '', imageUrl: '', content: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddEntry(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
                <input name="date" type="date" value={formData.date} onChange={handleChange} required />
                <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" required />
                <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Content" required />
                <button type="submit">Add Entry</button>
                <button type="button" onClick={onClose}>Close</button>
            </form>
        </div>
    );
};

export default AddEntryModal;