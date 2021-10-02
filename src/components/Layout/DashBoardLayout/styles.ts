import styled from 'styled-components';

export const DashboardContainer = styled.div`
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
    transform: translateX(40%);
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

export const DashboardContentWrapper = styled.div`
  width: 100%;
  max-height: 100vh;
`;

export const DashboardContent = styled.div`
  width: 100%;
  height: calc(100% - 6rem);
`;
