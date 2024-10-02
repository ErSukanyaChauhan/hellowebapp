import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`http://localhost:4000`)
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello ,React</h1>
        <h1>{message}</h1>
      </header>
    </div>
  );
}

export default App;
