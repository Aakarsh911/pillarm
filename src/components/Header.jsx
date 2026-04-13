// src/components/Header.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const links = [
  { to: '/home', label: 'Home' },
  { to: '/alarms', label: 'Alarms' },
  { to: '/friends', label: 'Friends' },
  { to: '/profile', label: 'Profile' },
];

export default function Header({ title }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <button
        className="header__hamburger"
        aria-expanded={open}
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>
      <nav className={`header__nav${open ? ' header__nav--open' : ''}`}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `header__link${isActive ? ' active' : ''}`
            }
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}