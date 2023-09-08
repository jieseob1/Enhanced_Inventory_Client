import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { AppProvider } from "@shopify/polaris";
import Navigation from '../components/Navigation';

import Home from "../route/Home";
import AuthRoutes from "../route/AuthRoutes";
import MainRoutes from "../route/MainRoutes";
const queryClient = new QueryClient()


const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<AuthRoutes />} />
        <Route
          path="*"
          element={
            <>
              <AppProvider i18n={{}}>
                <div style={{ display: 'flex', height: '100vh' }}>
                  <Navigation location="/">
                    {/* ...same as before */}
                  </Navigation>
                  <div style={{ flex: 1, padding: '20px' }}>
                    <MainRoutes />
                  </div>
                </div>
              </AppProvider>
            </>
          }
        />
      </Routes>
    </Router>
  </QueryClientProvider>
  )
    
}

export default App;