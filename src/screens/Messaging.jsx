// src/screens/Messaging.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import './Messaging.css';

export default function Messaging() {
  const navigate = useNavigate();
  return (
    <MobileFrame>
      <div className="messaging">
        <header className="messaging__header">
          <button onClick={() => navigate(-1)}>‹</button>
          <h1>Messaging</h1>
        </header>
        <div className="messaging__bot">
          <div className="messaging__bubble">My Name is Pillarmbot, how may I help you?</div>
          <div className="messaging__bubble messaging__bubble--user">
            How do I change my vibration speed?
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}