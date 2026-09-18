// src/layout/AppLayout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import './AppLayout.css';

function AppLayout({ children }) {
  return (
    <div className="fw-layout">
      <Sidebar />
      <main className="fw-content">
        {children}
      </main>
    </div>
  );
}

export default AppLayout;
