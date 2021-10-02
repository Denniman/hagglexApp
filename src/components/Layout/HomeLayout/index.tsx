import React, { ReactNode } from 'react';
import { Container } from './styles';

import Header from '../../Header';

interface LayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default HomeLayout;
