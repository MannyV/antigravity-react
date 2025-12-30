import React from 'react';
import { Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.2rem' }}>
          <Layers className="gradient-text" size={24} />
          <span>Antigravity</span>
        </Link>
        <ul style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
          <li><Link to="/features" style={{ color: 'var(--text-dim)' }}>Features</Link></li>
          <li><Link to="/about" style={{ color: 'var(--text-dim)' }}>About</Link></li>
          <li><Link to="/contact" style={{ color: 'var(--text-dim)' }}>Contact</Link></li>
        </ul>
        <button className="primary-btn" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
