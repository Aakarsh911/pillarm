// src/components/BottomNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css';

const items = [
  { to: '/home', label: 'Home', icon: '⌂' },
  { to: '/alarms', label: 'Alarms', icon: '⏰' },
  { to: '/friends', label: 'Friends', icon: '👥' },
  { to: '/profile', label: 'Profile', icon: '👤' },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      {items.map((it) => (
        <NavLink
          key={it.to}
          to={it.to}
          className={({ isActive }) =>
            `bottom-nav__item${isActive ? ' bottom-nav__item--active' : ''}`
          }
        >
          <span className="bottom-nav__icon" aria-hidden="true">{it.icon}</span>
          <span className="bottom-nav__label">{it.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}