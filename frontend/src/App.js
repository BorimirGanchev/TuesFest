import React from 'react';
import './App.css';
import Home from './Components/Home';
import Navbar from "./Components/Navbar.js"

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
