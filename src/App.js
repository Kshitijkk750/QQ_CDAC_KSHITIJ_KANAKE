import React from 'react';
import './App.css';

import { io } from 'socket.io-client';

const socket = io('<http://localhost:3000>');


function App() {
  return (
    <div className="App">
      <h1>Welcome to Chat application...</h1>
    </div>
  );
}

export default App;
