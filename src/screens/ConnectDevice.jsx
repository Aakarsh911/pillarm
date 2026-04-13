// src/screens/ConnectDevice.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import Button from '../components/Button';
import './ConnectDevice.css';

export default function ConnectDevice() {
  const navigate = useNavigate();
  const steps = [
    { icon: '📄', label: 'Turn on Bluetooth' },
    { icon: '⏱', label: 'Look for "Pillarm" and connect' },
    { icon: '⏰', label: 'Set your alarm' },
  ];
  return (
    <MobileFrame>
      <div className="connect">
        <div className="connect__hero" aria-hidden="true" />
        <h2 className="connect__title">Connect your Device</h2>
        <ul className="connect__steps">
          {steps.map((s, i) => (
            <li key={i} className="connect__step">
              <span className="connect__icon" aria-hidden="true">{s.icon}</span>
              <span className="connect__label">{s.label}</span>
            </li>
          ))}
        </ul>
        <Button onClick={() => navigate('/home')}>Connect</Button>
        <button className="connect__skip" onClick={() => navigate('/home')}>
          Already Connected
        </button>
      </div>
    </MobileFrame>
  );
}