import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);

  useEffect(() => {
    updateStatistics(text);
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const updateStatistics = (text) => {
    const words = text.toLowerCase().split(/[^\w']+/);
    const uniqueWords = [...new Set(words)];
    setUniqueWordCount(uniqueWords.length);
    const characters = text.replace(/[^a-zA-Z0-9]/g, '').length;
    setCharacterCount(characters);
  };

  const handleReplace = () => {
    const newText = text.replace(new RegExp(searchString, 'g'), replaceString);
    setText(newText);
  };

  return (
    <div className="app">
      <h1>Real-Time Text Analysis and String Replacement</h1>
       
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text here..."
      />
      <div className="statistics">
        <p>Unique Word Count: {uniqueWordCount}</p>
        <p>Character Count (excluding spaces and punctuation): {characterCount}</p>
      </div>
      <div className="replacement">
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="Search for old..."
        />
        <input
          type="text"
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
          placeholder="Replace with new..."
        />
        
        <button onClick={handleReplace}>Replace All</button>
        
      </div>
    </div>
  );
}

export default App;