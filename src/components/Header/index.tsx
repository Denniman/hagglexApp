import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PolyGon from '../../assets/images/Polygon.png';
import BellIcon from '../../assets/images/bell.png';
import { AppContext } from '../../context';

import { HeaderContainer, HeaderWrapper, Text } from './styles';

const Header = () => {
  const [show, SetShow] = useState(false);

  const toggleSidebar = useContext(AppContext);

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

export default Header;
