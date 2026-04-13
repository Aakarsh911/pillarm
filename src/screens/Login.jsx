// src/screens/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import Input from '../components/Input';
import Button from '../components/Button';
import './Auth.css';

export default function Login() {
  const navigate = useNavigate();
  const [u, setU] = useState(''); const [p, setP] = useState('');
  return (
    <MobileFrame>
      <div className="auth">
        <h1 className="auth__title">Hii There!!</h1>
        <p className="auth__subtitle">Welcome back you've been missed!</p>
        <Input value={u} onChange={(e) => setU(e.target.value)} placeholder="Enter Username" />
        <Input value={p} onChange={(e) => setP(e.target.value)} placeholder="Password" type="password" />
        <a href="#recover" className="auth__recover">Recover Password?</a>
        <Button onClick={() => navigate('/connect')}>Sign In</Button>
        <div className="auth__divider"><span>or</span></div>
        <div className="auth__socials">
          <button className="auth__social" aria-label="Apple"></button>
          <button className="auth__social" aria-label="Google">G</button>
          <button className="auth__social" aria-label="Facebook">f</button>
        </div>
        <p className="auth__switch">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </MobileFrame>
  );
}