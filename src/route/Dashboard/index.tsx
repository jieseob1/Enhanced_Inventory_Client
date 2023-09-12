import React from 'react';
import Page from '../../components/Page';
import Card from '../../components/Card';

import styled from 'styled-components';

const StyledPage = styled(Page)`
  height: 100%;
`;

const Dashboard = () => {
  return (
    <StyledPage>
      <Card>
        dashboard
      </Card>
    </StyledPage>
  );
};

export default Dashboard;