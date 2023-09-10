import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Settings from '../Settings';

const MainRoutes = () => {
  console.log("hihi mainroutes")
  return (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
)};

export default MainRoutes;