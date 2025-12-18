import React from 'react';

const EntryCard = ({ entry, onClick }) => {
  return (
    <div className="entry-card" onClick={onClick}>
      <h2>{entry.title}</h2>
      <p>{entry.date}</p>
      <img src={entry.imageUrl} alt={entry.title} />
    </div>
  );
};

export default EntryCard;