// EntryList.jsx
import React from 'react';

const EntryList = ({ entries, onAddEntry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-6xl font-extrabold mb-6">Welcome To the Diary App</h1> {/* Centered heading */}
      <button 
        onClick={onAddEntry} 
        className="border-2 border-blue-600 bg-blue-600 text-white text-3xl px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200 mb-4"
      >
        Add Entry
      </button>
      {entries.length === 0 ? (
        <p className="text-3xl">No entries yet!</p> /* Increased font size for message */
      ) : (
        <div className="flex flex-col w-full max-w-6xl"> {/* Flex container for entries */}
          {entries.map((entry, index) => (
            <div key={index} className="flex items-center border p-2 mb-4 w-full"> {/* Flex for horizontal alignment */}
              <div className="flex-grow flex items-center justify-between"> {/* Flex for equal spacing */}
                <h3 className="text-xl font-bold flex-1 text-left">{entry.title}</h3> {/* Entry Title */}
                <p className="text-lg flex-1 text-center">{entry.content}</p> {/* Entry Content */}
                <p className="text-yellow-400 text-sm flex-1 text-center">{new Date(entry.timestamp).toLocaleString()}</p> {/* Centered Date/Time */}
              </div>
              <img 
                src={entry.imageUrl} 
                alt="Entry related" 
                className="w-50 h-50 object-cover ml-4" // Adjust size as needed
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EntryList;