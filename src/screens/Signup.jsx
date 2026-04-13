// src/screens/Signup.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import Input from '../components/Input';
import Button from '../components/Button';
import './Auth.css';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); const [pw, setPw] = useState('');
  return (
    <MobileFrame>
      <div className="auth">
        <h1 className="auth__title">Hii There!!</h1>
        <p className="auth__subtitle">Welcome to wakey one stop solution for healthy life</p>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
        <Input value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Password" type="password" />
        <p className="auth__terms">By signing up you agree to Terms &amp; conditions of Wakey app.</p>
        <Button onClick={() => navigate('/connect')}>Sign Up</Button>
        <div className="auth__divider"><span>or</span></div>
        <div className="auth__socials">
          <button className="auth__social" aria-label="Apple"></button>
          <button className="auth__social" aria-label="Google">G</button>
          <button className="auth__social" aria-label="Facebook">f</button>
        </div>
        <p className="auth__switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </MobileFrame>
  );
}