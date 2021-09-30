import React, { useContext } from 'react';
import styled from 'styled-components';
// import { SidebarContext } from '../../../context';
import Sidebar from '../../components/SideBar';

const DashboardLayout: React.FC = ({ children }) => {
  //   const toggleSidebar = useContext(SidebarContext);
  const toggleSidebar = 'Fake';
  return (
    <DashboardContainer>
      <Sidebar
        className={`${toggleSidebar ? 'show' : 'hide'} sidebar`}
        // closeSideBar={toggleSidebar?.handleSidebar}
      />

      <DashboardContentWrapper>
        <DashboardContent>{children}</DashboardContent>
      </DashboardContentWrapper>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  .hide {
    transform: translateX(-100%);
    transition: ease-in-out 0.5s;
  }

  .show {
    transform: translateX(0%);
    transition: ease-in-out 0.5s;
  }

  .sidebar {
    @media (min-width: 768px) {
      display: block;
      position: static;
      transform: translateX(0%);
    }
  }
`;

const DashboardContentWrapper = styled.div`
  width: 100%;
  max-height: 100vh;
`;

const DashboardContent = styled.div`
  width: 100%;

  /* padding: 7px 5px 30px; */
  width: 100%;
  height: calc(100% - 6rem);
`;

export default DashboardLayout;
