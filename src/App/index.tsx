import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { AppProvider } from "@shopify/polaris";
import Navigation from '../components/Navigation';
import Frame from '../components/Frame';
import Home from "../route/Home";
import AuthRoutes from "../route/AuthRoutes";
import MainRoutes from "../route/MainRoutes";
const queryClient = new QueryClient()


const App: React.FC = () => {
  console.log("hihi2")
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider i18n={{}}>
        <Router>
          <Routes>
            <Route element={<AuthRoutes />} />
            <Route
              path="*"
              element={
                <Frame>
                    <div style={{ display: 'flex', height: '100vh' }}>
                      <Navigation location="/" />
                      <div style={{ flex: 1, padding: '20px' }}>
                        <MainRoutes />
                      </div>
                    </div>
                </Frame>
              }
            />
          </Routes>
        </Router>
    </AppProvider>
  </QueryClientProvider>
  )
    
}

export default App;