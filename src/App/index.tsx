import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import Navigation from '../components/Navigation';
import Frame from '../components/Frame';
import AuthRoutes from "../route/AuthRoutes";
import MainRoutes from "../route/MainRoutes";
import HomeMinor from '../icons/HomeMinor';
import OrdersMinor from '../icons/OrdersMinor';
import ProductsMinor from '../icons/ProductsMinor';
import styled from 'styled-components'

const queryClient = new QueryClient()

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

// const navigationMarkup = (
//   <Navigation location="/">
//     <Navigation.Section
//         items={[
//           {
//             label: 'Back to Shopify',
//             // icon: ArrowLeftMinor
//             icon: HomeMinor
//           },
//         ]}
//       />
//   </Navigation>
// )
const App: React.FC = () => {
  return (
    <Root>
      <QueryClientProvider client={queryClient}>
          <Frame>
            <Router>
              <Routes>
                <Route element={<AuthRoutes />} />
                <Route
                  path="*"
                  element={                    
                      <MainRoutes />
                  }
                />
              </Routes>
            </Router>
          </Frame>
    </QueryClientProvider>
  </Root>
  )
    
}

export default App;