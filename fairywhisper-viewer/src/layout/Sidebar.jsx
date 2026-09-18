// src/layout/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme/ThemeProvider';
import './Sidebar.css';

function Sidebar() {
  useTheme();

  function ColorModeButton() {
    return (
      <div className="fw-sidebar-button">
        <button className="fw-colormode-btn" onClick={cycleTheme}>
          Color Mode
        </button>
      </div>
    );
  } 

  const cycleTheme = () => {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');

    if (!current) {
      root.setAttribute('data-theme', 'dark');   // Base → Dark
    } else if (current === 'dark') {
      root.setAttribute('data-theme', 'light');  // Dark → Light
    } else {
      root.removeAttribute('data-theme');        // Light → Base
    }
  };

  return (
    <aside className="fw-sidebar">
      <h1 className="fw-sidebar-title">FairyWhisper Viewer</h1>
      <div className="fw-sidebar-spacer"></div>

      <ColorModeButton />

      <nav>
        <Link to="/">Colors</Link>
        <Link to="/typography">Typography</Link>
        <Link to="/shadows">Shadows</Link>
        <Link to="/spacing">Spacing</Link>
        <Link to="/radius">Radius</Link>
        <Link to="/components">Components</Link>
        <Link to="/brandmagic">Brand Magic</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
