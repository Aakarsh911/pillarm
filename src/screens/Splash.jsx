// src/screens/Splash.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import './Splash.css';

export default function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate('/welcome'), 1800);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <MobileFrame background="linear-gradient(180deg, #ffb46b 0%, #ff8a3d 100%)">
      <div className="splash">
        <h1 className="splash__logo">pillarm</h1>
      </div>
    </MobileFrame>
  );
}