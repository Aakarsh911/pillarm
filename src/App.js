// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Splash from './screens/Splash';
import Welcome from './screens/Welcome';
import Onboarding1 from './screens/Onboarding1';
import Onboarding2 from './screens/Onboarding2';
import Onboarding3 from './screens/Onboarding3';
import Login from './screens/Login';
import Signup from './screens/Signup';
import ConnectDevice from './screens/ConnectDevice';
import Home from './screens/Home';
import AlarmList from './screens/AlarmList';
import SetAlarm from './screens/SetAlarm';
import Friends from './screens/Friends';
import Profile from './screens/Profile';
import Notifications from './screens/Notifications';
import RiseAndShine from './screens/RiseAndShine';
import Menu from './screens/Menu';
import Messaging from './screens/Messaging';
import Settings from './screens/Settings';
import Search from './screens/Search';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/splash" replace />} />
      <Route path="/splash" element={<Splash />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/onboarding-1" element={<Onboarding1 />} />
      <Route path="/onboarding-2" element={<Onboarding2 />} />
      <Route path="/onboarding-3" element={<Onboarding3 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/connect" element={<ConnectDevice />} />
      <Route path="/home" element={<Home />} />
      <Route path="/alarms" element={<AlarmList />} />
      <Route path="/set-alarm" element={<SetAlarm />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/rise-and-shine" element={<RiseAndShine />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/messaging" element={<Messaging />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}