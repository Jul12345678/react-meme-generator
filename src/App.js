import React, { useEffect, useState } from 'react';
import { Memes } from './components/Memes';

function App() {
  // create state to hold templates
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    fetch('https://api.memegen.link/templates').then((x) =>
      x.json().then((response) => setTemplates(response)),
    );
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      {template && <Memes template={template} />}
      {!template && (
        // Fragment to add child
        <>
          <h1>Click to edit!</h1>
          {templates.map((template) => {
            return (
              // Button for ESLint
              <button key="id">
                <Memes
                  template={template}
                  onClick={() => {
                    setTemplate(template);
                  }}
                />
              </button>
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
