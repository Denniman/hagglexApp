import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  height: 100%;

  @media (min-width: 768px) {
    overflow-y: scroll;
  }
`;
