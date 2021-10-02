import React from 'react';
import styled from 'styled-components';

interface ErrorProps {
  text: string;
}

const ErrorModal: React.FC<ErrorProps> = ({ text }) => {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
};

const Container = styled.div`
  background: rgba(255, 0, 0, 0.6);
  border-radius: 0.7rem;
  padding: 0.6rem;
  text-align: center;

  p {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
  }
`;

export default ErrorModal;
