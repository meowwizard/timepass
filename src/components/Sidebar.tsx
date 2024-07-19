import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/technology-stack">Technology Stack</Link></li>
          <li><Link to="/project-structure">Project Structure</Link></li>
          <li><Link to="/setup-installation">Setup & Installation</Link></li>
          <li><Link to="/component-breakdown">Component Breakdown</Link></li>
          <li><Link to="/api-usage">API Usage</Link></li>
          <li><Link to="/screenshots">Screenshots</Link></li>
          <li><Link to="/conclusion">Conclusion</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
