import styled from 'styled-components';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <Container>{text}</Container>;
};

const Container = styled.button`
  width: 100%;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  border: none;
  color: #fff;
  outline: none;
  background: linear-gradient(94deg, #432b7b, #6a4bbc);
  font-size: 1.7rem;
  cursor: pointer;
`;

export default Button;
