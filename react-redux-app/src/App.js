import React from 'react';
import './App.css';

import CatImage from './components/CatImage.js'

function App() {
  return (
    <div className="App conatiner">
      <h1>Get a Random Cat!</h1>
      <CatImage />
    </div>
  );
}

export default App;
