import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import Frame from '../components/Frame';
import AuthRoutes from "../route/AuthRoutes";
import MainRoutes from "../route/MainRoutes";
import styled from 'styled-components'
import AppNavigation from "../components/Navigation";
import Header from "../components/Header";

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
                  topBar={
                    //이 부분 분리 해야됨 mainroutes내부까지 prop drilling되서 console.log 찍히는 중
                    <Header
                      onToggle={function (): void { // handleOnToggle로 변경
                        console.log("hello");
                      }}
                    />}
                  navigation={
                    <AppNavigation />
                  }
                >
                  {/* AuthRoute 추가 */}
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