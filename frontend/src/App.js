import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AiAssessment from './components/AiAssessment';
import AiPlan from './components/AiPlan';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import MediaContent from './components/MediaContent';
import Chat from './components/Chat';
import Coaches from './components/coaches/Coaches';
import TestConnection from './components/TestConnection';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestConnection />} />
        <Route path="/ai-assessment" element={<AiAssessment />} />
        <Route path="/ai-plan" element={<AiPlan />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resources" element={<MediaContent />} />
        <Route path="/coaches" element={<Coaches />} />
      </Routes>
      <Chat />
    </Router>
  );
}

export default App;
