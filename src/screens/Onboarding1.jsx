// src/screens/Onboarding1.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import Input from '../components/Input';
import Button from '../components/Button';
import './Onboarding.css';

export default function Onboarding1() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  return (
    <MobileFrame>
      <div className="onboarding">
        <div className="onboarding__hero" aria-hidden="true" />
        <h2 className="onboarding__title">Enter your Name</h2>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
        <div className="onboarding__dots">
          <span className="dot dot--active" /><span className="dot" /><span className="dot" />
        </div>
        <Button onClick={() => navigate('/onboarding-2')}>Continue</Button>
      </div>
    </MobileFrame>
  );
}