// src/components/Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="/technology-stack">Technology Stack</a>
        <a href="/project-structure">Project Structure</a>
        <a href="/setup-installation">Setup and Installation</a>
        <a href="/component-breakdown">Component Breakdown</a>
        <a href="/api-usage">API Usage</a>
        <a href="/screenshots">Screenshots</a>
        <a href="/conclusion">Conclusion</a>
      </nav>
    </header>
  );
};

export default Header;
