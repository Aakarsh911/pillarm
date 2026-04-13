// src/screens/Search.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import './Search.css';

export default function Search() {
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  return (
    <MobileFrame>
      <div className="search">
        <header className="search__header">
          <button onClick={() => navigate(-1)}>‹</button>
          <h1>Search</h1>
        </header>
        <div className="search__bar">
          <span aria-hidden="true">🔍</span>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search..." />
        </div>
      </div>
    </MobileFrame>
  );
}