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
import TopBar from '../components/TopBar';
import { Icon } from "@shopify/polaris";
import { ProfileMinor, LogOutMinor, QuestionMarkMajor, ConversationMinor, PhoneInMajor } from "@shopify/polaris-icons";
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
const searchFieldMarkup = (
  <TopBar.SearchField
    onChange={() => { }}
    value=""
    placeholder="검색..."
  />
);
const userMenuMarkup = (
  <TopBar.UserMenu
    actions={[
      {
        items: [{ content: '사용자 프로필', icon: ProfileMinor }],
      },
      {
        items: [{ content: '로그아웃', icon: LogOutMinor }],
      },
    ]}
    name="사용자 이름"
    detail="관리자"
    initials="A"
    open
    onToggle={() => { }}
  />
);
const secondaryMenuMarkup = (
  <TopBar.Menu
    activatorContent={
      <span>
        <Icon source={QuestionMarkMajor} />
        <p>도움말</p>
      </span>
    }
    open
    onOpen={() => { }}
    onClose={() => { }}
    actions={[
      {
        items: [{ content: '도움말 센터', icon: QuestionMarkMajor }],
      },
      {
        items: [{ content: '커뮤니티 포럼', icon: ConversationMinor }],
      },
      {
        items: [{ content: '지원 요청', icon: PhoneInMajor }],
      },
    ]}
  />
);
const topBarMarkup = (
  <TopBar
    showNavigationToggle
    userMenu={userMenuMarkup}
    searchField={searchFieldMarkup}
    secondaryMenu={secondaryMenuMarkup}
  />
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
                  topBar={topBarMarkup}
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