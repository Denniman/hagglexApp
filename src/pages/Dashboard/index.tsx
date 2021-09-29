import React from 'react';
import styled from 'styled-components';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <h1>Welcome to Dasboard</h1>
    </Container>
  );
};

const Container = styled.main`
  padding: 1.5re 2rem;
`;

export default Dashboard;
