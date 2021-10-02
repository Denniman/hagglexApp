import styled from 'styled-components';

export const SidebarWapper = styled.nav`
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

export const LinksWrapper = styled.div`
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

export const LogoText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2e1963;
  span {
    font-size: 1.7rem;
  }
`;
