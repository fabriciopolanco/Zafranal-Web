import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SecurityPage from './pages/Security/SecurityPage/';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; // Asegúrate de que la ruta sea correcta
import HerramientasSecurity from './pages/HerramientasSecurity/HerramientasSecurity/';
import KPIS from './pages/HerramientasSecurity/QUICKLINKSSECURITY/KPIS';
import SecuritySystem from './pages/HerramientasSecurity//QUICKLINKSSECURITY/SeguritySystem';
import EstrategicObjectives from './pages/HerramientasSecurity/QUICKLINKSSECURITY/EstrategicObjectives';
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/HerramientasSecurity" element={<HerramientasSecurity />} />"
        <Route path="/KPIS" element={<KPIS />} />
        <Route path="/SeguritySystem" element={<SecuritySystem />} />
        <Route path="/EstrategicObjectives" element={<EstrategicObjectives/>} />"
      </Routes>
    </Router>
  );
};

export default App;
