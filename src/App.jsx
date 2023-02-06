import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { AuthContext } from "./context/AuthContext";


function App() {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    user: null
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Router>
        <Routes>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
