// src/screens/SetAlarm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import './SetAlarm.css';

const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];

export default function SetAlarm() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(['Mon', 'Tue', 'Thr', 'Fri']);
  const [enabled, setEnabled] = useState(true);
  const toggle = (d) =>
    setSelected((s) => (s.includes(d) ? s.filter((x) => x !== d) : [...s, d]));

  return (
    <MobileFrame>
      <div className="set-alarm">
        <header className="set-alarm__header">
          <button onClick={() => navigate('/alarms')}>Cancel</button>
          <h1>Set Alarm</h1>
          <button className="set-alarm__save" onClick={() => navigate('/alarms')}>Save</button>
        </header>

        <div className="set-alarm__name">
          <span>Alarm Name</span><span>✏️</span>
        </div>

        <div className="set-alarm__picker">
          <div className="set-alarm__picker-col">
            <div>03</div><div>04</div>
            <div className="set-alarm__picker-active">05</div>
            <div>06</div><div>07</div>
          </div>
          <div className="set-alarm__picker-sep">:</div>
          <div className="set-alarm__picker-col">
            <div>28</div><div>29</div>
            <div className="set-alarm__picker-active">30</div>
            <div>31</div><div>32</div>
          </div>
          <div className="set-alarm__ampm">
            <div>PM</div>
            <div className="set-alarm__picker-active">AM</div>
          </div>
        </div>

        <div className="set-alarm__row">
          <div>Repeat</div>
          <div className="set-alarm__days">
            {days.map((d) => (
              <button key={d}
                className={`set-alarm__day${selected.includes(d) ? ' is-on' : ''}`}
                onClick={() => toggle(d)}>{d}</button>
            ))}
          </div>
        </div>

        <div className="set-alarm__row set-alarm__row--simple">
          <span>Sound</span><span className="muted">Bluebird ›</span>
        </div>
        <div className="set-alarm__row set-alarm__row--simple">
          <span>Vibrations</span>
        </div>
        <div className="set-alarm__row set-alarm__row--simple">
          <span>On/Off</span>
          <label className="set-alarm__toggle">
            <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
            <span />
          </label>
        </div>
        <div className="set-alarm__row set-alarm__row--simple">
          <span>Preview Alarm</span><span className="muted">›</span>
        </div>
      </div>
    </MobileFrame>
  );
}