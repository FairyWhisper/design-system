// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './tokens/fairywhisper-tokens.css'; // import your design-system tokens
import ThemeProvider from './theme/ThemeProvider';
import AppLayout from './layout/AppLayout';
import './global.css';

// Viewer pages
import Colors from './pages/Colors';
import Alerts from './pages/components/Alerts';
import Typography from './pages/Typography';
import TagsChips from './pages/components/TagsChips';
import Buttons from './pages/components/Buttons';
import Inputs from './pages/components/Inputs';
import Cards from './pages/components/Cards';
import Avatars from './pages/components/Avatars';
import Shadows from './pages/Shadows';
import Spacing from './pages/Spacing';
import Radius from './pages/Radius';
import Components from './pages/Components';
import BrandMagic from './pages/BrandMagic';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Colors />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/typography" element={<Typography />} />
            <Route path="/shadows" element={<Shadows />} />
            <Route path="/spacing" element={<Spacing />} />
            <Route path="/radius" element={<Radius />} />
            <Route path="/components" element={<Components />} />
            <Route path="/components/buttons" element={<Buttons />} />
            <Route path="/components/inputs" element={<Inputs />} />
            <Route path="/components/cards" element={<Cards />} />
            <Route path="/components/avatars" element={<Avatars />} />
            <Route path="/components/tags-chips" element={<TagsChips />} />
            <Route path="/components/alerts" element={<Alerts />} />
           <Route path="/brandmagic" element={<BrandMagic />} />
          </Routes>
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
