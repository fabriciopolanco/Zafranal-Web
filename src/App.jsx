import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SecurityPage from './pages/Security/SecurityPage/';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; // Asegúrate de que la ruta sea correcta
import HerramientasSecurity from './pages/HerramientasSecurity/HerramientasSecurity/';
import KPIS from './pages/HerramientasSecurity/QUICKLINKSSECURITY/KPIS';
import SecuritySystem from './pages/HerramientasSecurity//QUICKLINKSSECURITY/SeguritySystem';
import EstrategicObjectives from './pages/HerramientasSecurity/QUICKLINKSSECURITY/EstrategicObjectives';
import SecurityAwareness from './pages/HerramientasSecurity/QUICKLINKSSECURITY/SecurityAwareness';
import RiskAssessment from './pages/HerramientasSecurity/QUICKLINKSSECURITY/RiskAssessment';
import SecurityProcedures from './pages/HerramientasSecurity/QUICKLINKSSECURITY/SecurityProcedures';
import VoluntaryPrinciples from './pages/HerramientasSecurity/QUICKLINKSSECURITY/VoluntaryPrinciples';
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
        <Route path="/SecurityAwareness" element={<SecurityAwareness />} />
        <Route path="/RiskAssessment" element={<RiskAssessment />} />
        <Route path="/SecurityProcedures" element={<SecurityProcedures />} />
        <Route path="/VoluntaryPrinciples" element={<VoluntaryPrinciples />} />
      </Routes>
    </Router>
  );
};

export default App;
