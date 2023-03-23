import React from "react";
import { login } from "./firebase-config/login";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
