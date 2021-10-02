import { Container } from './styles';
interface ButtonProps {
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return <Container className={className}>{text}</Container>;
};

export default Button;
