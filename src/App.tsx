// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Navbar from './components/Navbar';
import AppFooter from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const location = useLocation();
  const noSidebarPaths = ['/'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ display: 'flex', flex: 1 }}>
        {!noSidebarPaths.includes(location.pathname) && <Sidebar />}
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/about-promospay/mission" replace />} />
            <Route path="/:category/:file" element={<Content />} />
          </Routes>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);