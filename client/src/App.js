import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import About from './pages/About';
// import SignUp from './pages/SignUp'; // Commented out - using external form links instead
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          {/* Sign up routes commented out - using external Google Forms instead */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; 