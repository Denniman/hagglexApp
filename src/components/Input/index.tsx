import styled from 'styled-components';
import { IconNigeria } from '../../assets/icons';

interface InputTextProps {
  id: string;
  placeholder: string;
  label?: string;
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
export const InputTextDashboard: React.FC<InputTextProps> = ({
  id,
  placeholder,
  label,
}) => {
  return (
    <DasboardWrapper>
      <label className="dashboardlabel" htmlFor={id}>
        {label}
      </label>
      <input type="text" placeholder={placeholder} className="input" id={id} />
    </DasboardWrapper>
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

export const PhoneNumberInput: React.FC<InputTextProps> = ({
  id,
  label,
  placeholder,
}) => {
  return (
    <NumberContainer>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <div className="input-wrapper">
        <div className="icon">
          <IconNigeria />
          <h3>(+234)</h3>
        </div>
        <input
          type="number"
          placeholder={placeholder}
          className="input"
          id={id}
        />
      </div>
    </NumberContainer>
  );
};

const NumberContainer = styled.div`
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    padding: 0.5rem 1rem;
    background-color: #f2ecff;
    border-radius: 0.3rem;
  }
  .input-wrapper {
    display: flex;
    width: 100%;
    align-items: center;
  }
  .label {
    font-size: 1.6rem;
    margin-bottom: 1.8rem;
  }
  .input {
    padding: 1rem 1rem;
    border: none;
    width: 100%;
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
const DasboardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .dashboardlabel {
    font-size: 1.3rem;
    font-weight: 700;
  }

  .input-wrapper {
    display: flex;
  }
  label {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
  .input {
    padding: 1.5rem 1.5rem;
    border-radius: 0.7rem;
    border: none;
    border: 2px solid #dadada;

    :focus {
      outline: none;
    }

    ::placeholder {
      font-size: 1.3rem;
      background-color: #fff;
    }
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;

  .dashboardlabel {
    font-size: 1.3rem;
    font-weight: 700;
  }

  .input-wrapper {
    display: flex;
  }
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
