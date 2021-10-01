import { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PolyGon from '../../assets/images/Polygon.png';
import BellIcon from '../../assets/images/bell.png';
import { SidebarContext } from '../../context';

const Header = () => {
  const [show, SetShow] = useState(false);

  const toggleSidebar = useContext(SidebarContext);

  const toggleShow = () => {
    SetShow((prev) => !prev);
  };
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div
          className="harmbuggermenu--wrapper"
          onClick={toggleSidebar?.handleSidebar}
        >
          <div className="harmbuggermenu--wrapper_menu"></div>
          <div className="harmbuggermenu--wrapper_menu"></div>
          <div className="harmbuggermenu--wrapper_menu"></div>
        </div>
      </HeaderContainer>
      <div className="header--wrapper">
        <img src={BellIcon} alt="" className="icon" />

        <div className="username">WO</div>

        <Text>Wills Omaer</Text>
        <div className="icon-dropdown" onClick={toggleShow}>
          <img src={PolyGon} alt="" className="polygon" />
        </div>
        <div className={`${show ? 'showPolygon' : 'hidePolygon'} sidebar`}>
          <ul>
            <Link to="/login" className="link">
              <li>Log Out</li>
            </Link>
          </ul>
        </div>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 8rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.05);

  .icon {
    width: 2.7rem;
    margin-right: 2rem;
  }

  .polygon {
    width: 1.7rem;
  }

  .header--wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    margin: 0 2rem;
    flex-basis: 95%;
  }

  .username {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    padding: 1rem;
    border-radius: 50%;
    background: #ece5ff;
    border: 2px solid #2e1963;
  }

  .icon-dropdown {
    width: 1.6rem;
    position: relative;
    cursor: pointer;
  }

  .hidePolygon {
    display: none;
  }

  .showPolygon {
    position: absolute;
    right: 20px;
    top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 0.7rem;
    width: 13rem;
    height: 10rem;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.05);
  }

  ul {
    font-size: 1.5rem;
    list-style: none;
    font-weight: 500;

    li {
      padding: 0.7rem 1rem;
    }
  }

  .link {
    text-decoration: none;
    color: #000;
  }
`;

const Text = styled.p`
  font-size: 1.3rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  .logo--wrapper {
  }

  .harmbuggermenu--wrapper {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    &_menu {
      width: 25px;
      height: 3px;
      background-color: #000;
      margin: 2px;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default Header;
