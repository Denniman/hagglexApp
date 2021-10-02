import React, { useContext } from 'react';
import { AppContext } from '../../../context';
import Sidebar from '../../SideBar';
import {
  DashboardContainer,
  DashboardContent,
  DashboardContentWrapper,
} from './styles';
const DashboardLayout: React.FC = ({ children }) => {
  const toggleSidebar = useContext(AppContext);

  return (
    <DashboardContainer>
      <Sidebar
        className={`${toggleSidebar?.sidebar ? 'show' : 'hide'} sidebar`}
        closeSideBar={toggleSidebar?.handleSidebar}
      />

      <DashboardContentWrapper>
        <DashboardContent>{children}</DashboardContent>
      </DashboardContentWrapper>
    </DashboardContainer>
  );
};

export default DashboardLayout;
