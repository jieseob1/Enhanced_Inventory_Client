import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Settings from '../Settings';
import LoginPage from '../Login';
import SignupPage from '../Signup';

const MainRoutes = () => {
  console.log("hihi mainroutes")
  return (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
)};

export default MainRoutes;