import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Feed from './pages/Feed';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <div className="container"> {/* APPLYING THIS CLASS */}
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;