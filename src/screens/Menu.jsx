// src/screens/Menu.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import './Menu.css';

const tiles = [
  { label: 'Home', to: '/home' },
  { label: 'Settings', to: '/settings' },
  { label: 'Messaging', to: '/messaging' },
  { label: 'Profile', to: '/profile' },
  { label: 'Search', to: '/search' },
];

export default function Menu() {
  const navigate = useNavigate();
  return (
    <MobileFrame>
      <div className="menu">
        <header className="menu__header">
          <button onClick={() => navigate(-1)} aria-label="Back">‹</button>
          <h1>Menu</h1>
        </header>
        <div className="menu__grid">
          {tiles.map((t) => (
            <button key={t.label} className="menu__tile" onClick={() => navigate(t.to)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </MobileFrame>
  );
}