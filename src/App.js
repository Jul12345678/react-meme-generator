import React, { useEffect, useState } from 'react';

function App() {
  // create state to hold templates
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch('https://api.memegen.link/templates').then((x) =>
      x.json().then((response) => setTemplates(response)),
    );
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      {templates.map((template) => {
        return (
          <button
            key="id"
            onClick={() => {
              setTemplates(template);
            }}
          >
            <img
              style={{ width: 200 }}
              key={template.id}
              src={template.blank}
              alt={template.name}
            />
          </button>
        );
      })}
    </div>
  );
}

export default App;
