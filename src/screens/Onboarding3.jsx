// src/screens/Onboarding3.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import Button from '../components/Button';
import './Onboarding.css';

export default function Onboarding3() {
  const navigate = useNavigate();
  const [speed, setSpeed] = useState(50);
  const [intensity, setIntensity] = useState(50);
  return (
    <MobileFrame>
      <div className="onboarding">
        <div className="onboarding__hero" aria-hidden="true" />
        <h2 className="onboarding__title">Set your Preferences</h2>
        <p className="onboarding__subtitle">Adjust the vibrations to your preference</p>

        <div className="onboarding__field">
          <label className="onboarding__label">Vibration Speed</label>
          <input type="range" min="0" max="100" value={speed}
            onChange={(e) => setSpeed(e.target.value)} className="onboarding__slider" />
        </div>
        <div className="onboarding__field">
          <label className="onboarding__label">Vibration Intensity</label>
          <input type="range" min="0" max="100" value={intensity}
            onChange={(e) => setIntensity(e.target.value)} className="onboarding__slider" />
        </div>

        <div className="onboarding__dots">
          <span className="dot" /><span className="dot" /><span className="dot dot--active" />
        </div>
        <Button onClick={() => navigate('/login')}>Continue</Button>
      </div>
    </MobileFrame>
  );
}