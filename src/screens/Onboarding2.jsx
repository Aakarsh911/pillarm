// src/screens/Onboarding2.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import Input from '../components/Input';
import Button from '../components/Button';
import './Onboarding.css';

export default function Onboarding2() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <MobileFrame>
      <div className="onboarding">
        <div className="onboarding__hero" aria-hidden="true" />
        <h2 className="onboarding__title">Enter your Contact Details</h2>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email ID" type="email" />
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone Number" type="tel" />
        <div className="onboarding__dots">
          <span className="dot" /><span className="dot dot--active" /><span className="dot" />
        </div>
        <Button onClick={() => navigate('/onboarding-3')}>Continue</Button>
      </div>
    </MobileFrame>
  );
}