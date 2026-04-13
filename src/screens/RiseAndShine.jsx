// src/screens/RiseAndShine.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import Button from '../components/Button';
import './RiseAndShine.css';

export default function RiseAndShine() {
  const navigate = useNavigate();
  return (
    <MobileFrame background="linear-gradient(180deg, #ff8a3d 0%, #ffd29b 100%)">
      <div className="rise">
        <h1 className="rise__title">Rise and Shine!</h1>
        <div className="rise__time">
          <span className="rise__hours">5:30</span>
          <span className="rise__ampm">AM</span>
        </div>
        <Button onClick={() => navigate('/home')} fullWidth={false}>
          Stop Alarm
        </Button>
      </div>
    </MobileFrame>
  );
}