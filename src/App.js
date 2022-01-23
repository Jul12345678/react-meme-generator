import React, { useEffect, useState } from 'react';
import { Memes } from './components/Memes';

function App() {
  // create state to hold templates
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  useEffect(() => {
    fetch('https://api.memegen.link/templates').then((x) =>
      x.json().then((response) => setTemplates(response)),
    );
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      {template && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Memes template={template} />
          <input
            placeholder="top text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
          />
          <input
            placeholder="bottom text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
          />
          <button type="submit">Create Meme</button>
        </form>
      )}
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
