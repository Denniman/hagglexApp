import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
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

const SidebarWapper = styled.nav`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  position: absolute;
  z-index: 5;

  .logo-wrapper {
    margin-bottom: 4rem;
    display: flex;
    gap: 3rem;
    width: 100%;
    padding: 1rem 4rem;
    align-items: center;
  }

  .close {
    display: block;
    @media (min-width: 768px) {
      display: none;
    }
  }

  .icon {
    width: 4rem;
    margin-right: 1rem;
  }

  @media (min-width: 768px) {
    width: 30rem;
    display: block;
  }
`;

const LinksWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logout {
    :hover {
      cursor: pointer;
    }
  }

  .nav-link {
    position: relative;
    display: flex;
    text-decoration: none;
    width: 100%;
    padding: 1rem 4rem;
    font-weight: 600;
    font-size: 1.4rem;
    color: #000;
    text-align: center;

    transition: all 0.5s ease-out;

    &:hover {
      background-position: left bottom;
      color: #2e1963;
      background-color: #ece5ff;
      path {
        fill: #2e1963;
      }
    }

    .icon__wrapper {
      display: flex;
      align-items: center;
    }

    svg {
      margin-right: 1rem;
    }

    &.active {
      color: #2e1963;
      background-color: #ece5ff;

      ::before {
        position: absolute;
        content: '';
        height: 6rem;
        background: #02111b;
        width: 0.3rem;
        left: 0;
        border-radius: 0px 8px 8px 0px;
      }

      svg {
        g {
          opacity: 1;
        }
      }
    }
  }

  .bankspan {
    font-size: 0.9rem;
  }
`;

const LogoText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2e1963;
  span {
    font-size: 1.7rem;
  }
`;

export default Sidebar;
