import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import {
  IconSavings,
  IconOTC,
  IconMore,
  IconSupport,
  IconWallet,
  DPIconNewWallet,
  DPIconClose,
} from '../../assets/icons';

import { LinksWrapper, SidebarWapper, LogoText } from './styles';

interface SideBarI {
  className?: string;
  closeSideBar?: () => void;
}

const Sidebar: React.FC<SideBarI> = ({ className, closeSideBar }) => {
  return (
    <SidebarWapper className={className}>
      <LinksWrapper>
        <div className="logo-wrapper">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt="" className="icon logo" />
            <LogoText>
              Haggle<span>X</span>
            </LogoText>
          </div>
          <DPIconClose className="close" onClick={closeSideBar} />
        </div>

        <NavLink
          to="/dashboard/"
          className="nav-link"
          activeClassName="active"
          onClick={closeSideBar}
          exact
        >
          <div className="icon__wrapper">
            <DPIconNewWallet className="icon" />
            DASHBOARD
          </div>
        </NavLink>

        <NavLink
          to="/dashboard/wallet"
          className="nav-link"
          activeClassName="active"
          onClick={closeSideBar}
          exact
        >
          <div className="icon__wrapper">
            <IconWallet className="icon icon-large" />
            WALLET
          </div>
        </NavLink>
        <NavLink
          to="/dashboard/otc"
          className={`nav-link divider`}
          style={{ position: 'relative' }}
          activeClassName="active"
          onClick={closeSideBar}
          exact
        >
          <div className="icon__wrapper">
            <IconOTC className="icon" />
            OTC
          </div>
        </NavLink>

        <NavLink
          to="/dashboard/savings"
          className={`nav-link divider`}
          style={{ position: 'relative' }}
          activeClassName="active"
          onClick={closeSideBar}
          exact
        >
          <div className="icon__wrapper">
            <IconSavings className="icon" />
            SAVINGS
          </div>
        </NavLink>

        <NavLink
          to="/dashboard/more"
          className={`nav-link divider`}
          style={{ position: 'relative' }}
          activeClassName="active"
          onClick={closeSideBar}
          exact
        >
          <div className="icon__wrapper">
            <IconMore className="icon" />
            MORE
          </div>
        </NavLink>

        <NavLink
          to="/dashboard/support"
          className={`nav-link divider`}
          style={{ position: 'relative' }}
          activeClassName="active"
          onClick={closeSideBar}
          exact
        >
          <div className="icon__wrapper">
            <IconSupport className="icon" />
            SUPPORT
          </div>
        </NavLink>
      </LinksWrapper>
    </SidebarWapper>
  );
};

export default Sidebar;
