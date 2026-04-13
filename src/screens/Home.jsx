// src/screens/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import BottomNav from '../components/BottomNav';
import Card from '../components/Card';
import Button from '../components/Button';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  const activities = [
    { icon: '🧘', label: 'Yoga' },
    { icon: '👣', label: 'Steps' },
    { icon: '🔥', label: 'Calories' },
  ];
  return (
    <MobileFrame>
      <div className="home">
        <header className="home__header">
          <div className="home__user">
            <div className="home__name">John Doe</div>
            <div className="home__location">📍 Boston</div>
          </div>
          <button className="home__bell" aria-label="Notifications"
            onClick={() => navigate('/notifications')}>🔔</button>
        </header>

        <Card className="home__quote">
          <span className="home__quote-mark">"</span>
          <p>Rise and shine!</p>
        </Card>

        <Card className="home__alarm-card">
          <div className="home__alarm-label">Scheduled Alarm</div>
          <div className="home__alarm-row">
            <div className="home__alarm-time">5:30 AM</div>
            <label className="home__toggle">
              <input type="checkbox" defaultChecked />
              <span className="home__toggle-track" />
            </label>
          </div>
          <div className="home__alarm-days">SMTWTFS</div>
        </Card>

        <h3 className="home__section">My Activity</h3>
        <div className="home__activities">
          {activities.map((a) => (
            <div key={a.label} className="home__activity">
              <div className="home__activity-icon">{a.icon}</div>
              <div className="home__activity-label">{a.label}</div>
            </div>
          ))}
        </div>

        <Card className="home__history" onClick={() => navigate('/alarms')}>
          <span>🎉 Alarm History</span>
          <span className="home__chev">›</span>
        </Card>

        <h3 className="home__section">Articles</h3>
        <Card className="home__article">
          <div className="home__article-img" aria-hidden="true" />
          <h4>Unplug before bed</h4>
          <p>Unplugging from smartphones and laptops about 30 minutes before bed can contribute to a better night of sleep.</p>
          <Button>Read More</Button>
        </Card>

        <BottomNav />
      </div>
    </MobileFrame>
  );
}