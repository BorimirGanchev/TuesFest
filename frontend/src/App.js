import React from "react";
import { login } from "./firebase-config/login";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from "./Pages/Login";
import Register from "./Pages/Register"
import HomeChat from "./Pages/HomeChat"

function App() {
  return (
    <>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/chat" element={<HomeChat />}/>
      </Routes>
    </>
  );
}

export default App;


/*<div className="container">
<Navbar />
<Home/>
</div>*/