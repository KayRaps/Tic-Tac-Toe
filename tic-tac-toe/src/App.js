// App.js
import React from 'react';
import './App.css';
import Game from './components/Game'; // Corrected import path

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe Game</h1>
      </header>
      <main className="App-main">
        <Game />
      </main>
    </div>
  );
}

export default App;
