// src/components/Input.jsx
import React from 'react';
import './Input.css';

export default function Input({ value, onChange, placeholder, type = 'text', icon }) {
  return (
    <div className="input">
      <input
        className="input__field"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {icon && <span className="input__icon">{icon}</span>}
    </div>
  );
}