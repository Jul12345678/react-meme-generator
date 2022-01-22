import React from 'react';

export const Memes = ({ template, onClick }) => {
  return (
    <button key="id" onClick={onClick}>
      <img
        style={{ width: 200 }}
        key={template.id}
        src={template.blank}
        alt={template.name}
      />
    </button>
  );
};
