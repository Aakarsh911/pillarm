// src/screens/AlarmList.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import BottomNav from '../components/BottomNav';
import './AlarmList.css';

const alarms = [
  { id: 1, name: 'Morning Alarm', time: '5:30', days: 'Mon, Tue, Thru, Fri', remaining: '12h 28m', enabled: true },
  { id: 2, name: 'Morning Alarm', time: '6:30', days: 'Mon, Tue, Thru, Fri', remaining: '12h 28m', enabled: false },
];

export default function AlarmList() {
  const navigate = useNavigate();
  return (
    <MobileFrame>
      <div className="alarms">
        <header className="alarms__header">
          <button className="alarms__cancel" onClick={() => navigate('/home')}>Cancel</button>
          <h1 className="alarms__title">Alarm</h1>
          <button className="alarms__edit">Edit</button>
        </header>

        <div className="alarms__list">
          {alarms.map((a) => (
            <div key={a.id} className="alarm-card">
              <div className="alarm-card__top">
                <span className="alarm-card__name">{a.name}</span>
                <label className="alarm-card__toggle">
                  <input type="checkbox" defaultChecked={a.enabled} />
                  <span />
                </label>
              </div>
              <div className="alarm-card__time">{a.time}</div>
              <div className="alarm-card__bottom">
                <span>{a.days}</span>
                <span>{a.remaining}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="alarms__fab" aria-label="Add alarm"
          onClick={() => navigate('/set-alarm')}>+</button>

        <BottomNav />
      </div>
    </MobileFrame>
  );
}