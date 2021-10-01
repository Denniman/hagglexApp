import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  background-color: #fff;
  border-radius: 0.7rem;
  padding: 8rem 5rem;
  margin: 0;
  @media (min-width: 768px) {
    margin: 5rem;
  }

  .first {
    margin-top: 4rem;
  }

  .form--control {
    margin-bottom: 1.8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .forgot--password {
    margin-bottom: 1.8rem;
  }

  .newuser {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  .privacy {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--terms {
      display: flex;
      gap: 1rem;
    }
  }
`;

export const Text = styled.p`
  color: #2e1963;
  font-weight: 500;
  font-size: 1.3rem;
`;

export const LinkText = styled(Link)`
  text-decoration: none;
  color: #2e1963;
  font-weight: 500;
  font-size: 1.3rem;
`;

export const TextSecondary = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
  color: #000;
  margin-right: 0.6rem;
`;