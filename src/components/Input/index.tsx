import styled from 'styled-components';

interface InputTextProps {
  id: string;
  placeholder: string;
  label: string;
}

export const InputText: React.FC<InputTextProps> = ({
  id,
  placeholder,
  label,
}) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input type="text" placeholder={placeholder} className="input" id={id} />
    </Container>
  );
};

export const InputEmail: React.FC<InputTextProps> = ({
  id,
  placeholder,
  label,
}) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input type="email" placeholder={placeholder} className="input" id={id} />
    </Container>
  );
};
export const InputPassword: React.FC<InputTextProps> = ({
  id,
  placeholder,
  label,
}) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input
        type="password"
        placeholder={placeholder}
        className="input"
        id={id}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 1.6rem;
    margin-bottom: 1.8rem;
  }
  .input {
    padding: 1rem 0;
    border: none;
    border-bottom: 2px solid #dadada;

    :focus {
      outline: none;
    }

    ::placeholder {
      font-size: 1.5rem;
      background-color: #fff;
    }
  }
`;
