// src/screens/Notifications.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import './Notifications.css';

const items = [
  { id: 1, icon: '💎', title: 'Review the app now!', time: '1h ago' },
  { id: 2, icon: '⏰', title: 'You have added new alarm', time: '1h ago' },
];

export default function Notifications() {
  const navigate = useNavigate();
  return (
    <MobileFrame>
      <div className="notif">
        <header className="notif__header">
          <h1>Notification</h1>
          <button onClick={() => navigate(-1)} aria-label="Close">✕</button>
        </header>
        <ul className="notif__list">
          {items.map((n) => (
            <li key={n.id} className="notif__item">
              <div className="notif__icon" aria-hidden="true">{n.icon}</div>
              <div className="notif__body">
                <div className="notif__title">{n.title}</div>
                <div className="notif__time">{n.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MobileFrame>
  );
}