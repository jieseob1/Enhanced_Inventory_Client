import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import Navigation from '../components/Navigation';
import Frame from '../components/Frame';
import AuthRoutes from "../route/AuthRoutes";
import MainRoutes from "../route/MainRoutes";
import ArrowLeftMinor from '../icons/ArrowLeftMinor';
import HomeMinor from '../icons/HomeMinor';
import OrdersMinor from '../icons/OrdersMinor';
import ProductsMinor from '../icons/ProductsMinor';
import styled from 'styled-components'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true
    }
  }
})

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const navigationMarkup = (
  <Navigation location="/">
    <Navigation.Section
        items={[
          {
            label: 'Back to Dashboard',
            icon: ArrowLeftMinor
          },
        ]}
      />
  </Navigation>
)
const App: React.FC = () => {
  return (
    <Root>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route element={<AuthRoutes />} />
            <Route
              path="*"
              element={                    
                  <Frame
                    navigation={navigationMarkup}
                  >
                    <MainRoutes />
                  </Frame>
              }
            />
          </Routes>
        </Router>
    </QueryClientProvider>
  </Root>
  )
    
}

export default App;