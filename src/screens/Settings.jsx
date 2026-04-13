// src/screens/Settings.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import './Settings.css';

export default function Settings() {
  const navigate = useNavigate();
  const [speed, setSpeed] = useState(50);
  const [amount, setAmount] = useState(50);
  const colors = ['#ff8a3d', '#ffb46b', '#3da9ff', '#3dd47a', '#a93dff', '#ff3d6e'];
  const [active, setActive] = useState(colors[0]);
  return (
    <MobileFrame>
      <div className="settings">
        <header className="settings__header">
          <button onClick={() => navigate(-1)}>‹</button>
          <h1>Settings</h1>
        </header>
        <label className="settings__label">Vibration Speed</label>
        <input type="range" min="0" max="100" value={speed}
          onChange={(e) => setSpeed(e.target.value)} className="settings__slider" />
        <label className="settings__label">Vibration Amount</label>
        <input type="range" min="0" max="100" value={amount}
          onChange={(e) => setAmount(e.target.value)} className="settings__slider" />
        <label className="settings__label">App Color</label>
        <div className="settings__colors">
          {colors.map((c) => (
            <button key={c} aria-label={`Color ${c}`}
              className={`settings__color${active === c ? ' is-active' : ''}`}
              style={{ background: c }} onClick={() => setActive(c)} />
          ))}
        </div>
      </div>
    </MobileFrame>
  );
}