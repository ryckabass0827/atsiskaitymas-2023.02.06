import './App.css';
import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import WelcomePage from './components/WelcomePage';
import { AuthContext } from "./context/AuthContext";
import Home from "./components/Home"


function App() {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    user: null
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} exact />
        </Routes>

      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
