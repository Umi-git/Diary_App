import React from 'react';

const ViewEntryModal = ({ entry, onClose }) => {
  return (
    <div className="modal">
      <h2>{entry.title}</h2>
      <p>{entry.date}</p>
      <img src={entry.imageUrl} alt={entry.title} />
      <p>{entry.content}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ViewEntryModal;