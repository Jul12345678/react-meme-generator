import React from 'react';

// This makes template open in new window if clicked on!
export const Memes = ({ template, onClick }) => {
  return (
    // Remove button for bettter ESLint option
    <button key="id" onClick={onClick}>
      <img
        style={{ width: 300 }}
        key={template.id}
        src={template.blank}
        alt={template.name}
      />
    </button>
  );
};
