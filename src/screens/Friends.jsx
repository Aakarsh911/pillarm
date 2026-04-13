// src/screens/Friends.jsx
import React from 'react';
import MobileFrame from '../components/MobileFrame';
import BottomNav from '../components/BottomNav';
import './Friends.css';

const friends = [
  { name: 'Ada' }, { name: 'Tanya' }, { name: 'Charlie' },
  { name: 'Nathan' }, { name: 'Jack' }, { name: 'Sakura' },
  { name: 'Maroline' }, { name: 'Andre' },
];

export default function Friends() {
  return (
    <MobileFrame>
      <div className="friends">
        <header className="friends__header">
          <h1>Friends</h1>
          <button className="friends__add" aria-label="Add friend">+👤</button>
        </header>
        <ul className="friends__list">
          {friends.map((f) => (
            <li key={f.name} className="friend">
              <div className="friend__avatar" aria-hidden="true" />
              <div className="friend__info">
                <div className="friend__name">{f.name}</div>
                <div className="friend__sub">Sent a message</div>
              </div>
              <span className="friend__gem" aria-hidden="true">💎</span>
            </li>
          ))}
        </ul>
        <BottomNav />
      </div>
    </MobileFrame>
  );
}