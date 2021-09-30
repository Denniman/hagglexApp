import styled from 'styled-components';
import {
  DPIconBell,
  DPIconDropDown,
  DPIconNewWallet,
  IconAlertBell,
} from '../../assets/icons';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div className="harmbuggermenu--wrapper">
          <div className="harmbuggermenu--wrapper_menu"></div>
          <div className="harmbuggermenu--wrapper_menu"></div>
          <div className="harmbuggermenu--wrapper_menu"></div>
        </div>
      </HeaderContainer>
      <div className="header--wrapper">
        {/* <DPIconBell className="icon" /> */}
        <IconAlertBell className="icon" />

        <div className="username">WO</div>

        <Text>Wills Omaer</Text>
        <DPIconDropDown className="icon-dropdown" />
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  /* padding: 0.5rem 1rem; */
  width: 100%;
  height: 8rem;
  background-color: #fff;
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.05);

  .icon {
    width: 2.5rem;
  }

  .icon-dropdown {
    width: 1.3rem;
  }

  .header--wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    margin: 0 2rem;
  }

  .username {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    padding: 1rem;
    border-radius: 50%;
    border: 2px solid #2e1963;
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
