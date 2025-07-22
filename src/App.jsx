import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SecurityPage from './pages/Security/SecurityPage/';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/security" element={<SecurityPage />} />
      </Routes>
    </Router>
  );
};

export default App;