// src/components/Button.jsx
import React from 'react';
import './Button.css';

export default function Button({
  children, onClick, variant = 'primary', type = 'button', fullWidth = true,
}) {
  const cls = `btn btn--${variant}${fullWidth ? ' btn--full' : ''}`;
  return <button type={type} className={cls} onClick={onClick}>{children}</button>;
}