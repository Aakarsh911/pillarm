// src/screens/Welcome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import './Welcome.css';

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <MobileFrame>
      <div className="welcome">
        <div className="welcome__illustration" aria-hidden="true" />
        <h2 className="welcome__title">
          Welcome! Set your pillarm and make waking up easier
        </h2>
        <button className="welcome__cta" onClick={() => navigate('/onboarding-1')}>
          <span>build your profile</span>
          <span className="welcome__arrow">›</span>
        </button>
      </div>
    </MobileFrame>
  );
}