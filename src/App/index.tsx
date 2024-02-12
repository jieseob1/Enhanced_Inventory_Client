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

//Dashboard
//Orders
// Products
// Customer
// message
// settings
//https://www.behance.net/gallery/115550699/Ecommerce-Dashboard-for-Sellers
// https://www.behance.net/gallery/161378721/Warehouse-Management-System-(WMS)-Case-Study?tracking_source=search_projects|wms+warehouse+management&l=0
// https://www.behance.net/gallery/181775687/Snabb-suite-A-warehouse-management-system-for-SMEs?tracking_source=search_projects|wms+warehouse+management&l=16
const navigationMarkup = (
  <Navigation location="/">
    <Navigation.Section
      items={[
        {
          url: '/',
          label: 'Back to Dashboard',
          icon: ArrowLeftMinor
        },
        {
          url: '/',
          label: 'Home',
          icon: HomeMinor,
        },
        {
          url: '/products',
          label: 'Products',
          icon: ProductsMinor,
        },
        {
          url: '/inventory',
          label: 'Inventory',
          icon: ProductsMinor,
        },
        {
          url: '/settings',
          label: 'Settings',
          icon: ProductsMinor,
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