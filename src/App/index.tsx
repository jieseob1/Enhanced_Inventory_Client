import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import Home from "../route/Home";
import LoginPage from "../route/Login";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  )
    
}

export default App;