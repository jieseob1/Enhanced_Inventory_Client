import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


import Home from "../route/Home";
import LoginPage from "../route/Login";

const queryClient = new QueryClient()


const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
    
}

export default App;