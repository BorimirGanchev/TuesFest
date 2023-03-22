import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar.js";
import { login } from "./firebase-config/login";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
