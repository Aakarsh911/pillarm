// src/screens/Profile.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import BottomNav from '../components/BottomNav';
import './Profile.css';

export default function Profile() {
  const navigate = useNavigate();
  const rows = [
    { label: 'See Alarm History', to: '/alarms' },
    { label: 'Edit preferences', to: '/onboarding-3' },
    { label: 'Share your feedback', to: '/profile' },
  ];
  return (
    <MobileFrame>
      <div className="profile">
        <div className="profile__hero" aria-hidden="true" />
        <header className="profile__header">
          <h1>Profile</h1>
          <button onClick={() => navigate('/menu')} aria-label="Settings">⚙️</button>
        </header>

        <div className="profile__card">
          <div className="profile__row">
            <div className="profile__avatar" aria-hidden="true" />
            <div>
              <div className="profile__name">John Doe</div>
              <div className="profile__loc">📍 Boston</div>
            </div>
            <button className="profile__edit">✏️ Edit</button>
          </div>
          <div className="profile__sunrise">🌅 5:30 AM</div>

          <ul className="profile__list">
            {rows.map((r) => (
              <li key={r.label} onClick={() => navigate(r.to)}>
                <span>{r.label}</span><span>›</span>
              </li>
            ))}
          </ul>
        </div>

        <BottomNav />
      </div>
    </MobileFrame>
  );
}