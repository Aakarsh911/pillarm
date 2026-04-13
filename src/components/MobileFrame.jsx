// src/components/MobileFrame.jsx
import React from 'react';
import './MobileFrame.css';

export default function MobileFrame({ children, background = 'var(--color-bg)' }) {
  return (
    <div className="mobile-frame" style={{ background }}>
      <div className="mobile-frame__inner">{children}</div>
    </div>
  );
}