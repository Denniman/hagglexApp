import { useState, useContext } from 'react';
import PolyGon from '../../assets/images/Polygon.png';
import BellIcon from '../../assets/images/bell.png';
import { AppContext } from '../../context';
import { DPIconLogout } from '../../assets/icons';

import { HeaderContainer, HeaderWrapper, Text, Logout } from './styles';

const Header = () => {
  const [show, SetShow] = useState(false);

  const toggleSidebar = useContext(AppContext);

  const toggleShow = () => {
    SetShow((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
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
          <Logout onClick={handleLogout}>
            <DPIconLogout />
            Log Out
          </Logout>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
