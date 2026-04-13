// src/components/Card.jsx
import React from 'react';
import './Card.css';

export default function Card({ children, onClick, className = '' }) {
  return (
    <div className={`card ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}