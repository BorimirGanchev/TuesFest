import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Route, Link, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import HomeChat from "./Pages/HomeChat";
import IllSearch from "./Components/IllSearch";
import { AuthContext } from "./context/auth-context-firebase-trash";

function App() {
  const { current_user } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!current_user) {
      return <Navigate to="/login" />;
    }
  };
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="illsearch" element={<IllSearch />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="chat" element={<HomeChat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
