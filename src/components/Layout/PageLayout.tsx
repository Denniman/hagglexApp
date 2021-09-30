import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Header from '../Header';

interface LayoutProps {
  children: ReactNode;
  showSideBar?: () => void;
}

const PagesLayout: React.FC<LayoutProps> = ({ children, showSideBar }) => {
  return (
    <>
      {/* <HeaderContainer> */}
      {/* <div className="harmbuggermenu--wrapper" onClick={showSideBar}>
          <div className="harmbuggermenu--wrapper_menu"></div>
          <div className="harmbuggermenu--wrapper_menu"></div>
          <div className="harmbuggermenu--wrapper_menu"></div>
        </div> */}
      {/* </HeaderContainer> */}
      <Header />
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.main`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  height: 100%;

  @media (min-width: 768px) {
    overflow-y: scroll;
  }
`;

// const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 5px 10px;
//   .logo--wrapper {
//   }

//   .harmbuggermenu--wrapper {
//     display: flex;
//     flex-direction: column;
//     &_menu {
//       width: 25px;
//       height: 3px;
//       background-color: #000;
//       margin: 2px;
//     }
//   }

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

export default PagesLayout;
