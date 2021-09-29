import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import {
  InputEmail,
  InputPassword,
  InputText,
  PhoneNumberInput,
} from '../../components/Input';
import Button from '../../components/Button';
// import PhoneNumberInput from '../../components/PhoneNumberInput';

const SignUp = () => {
  return (
    <Layout>
      <Form>
        <h2>Create new account</h2>
        <div className="form--control first">
          <InputEmail
            id="email"
            label="Email Address"
            placeholder="example@mail.com"
          />
        </div>
        <div className="form--control">
          <InputPassword
            id="password"
            label="Password"
            placeholder="*****************"
          />
        </div>
        <div className="form--control">
          <InputText
            placeholder="Chrissteve"
            label="Create username"
            id="username"
          />
        </div>
        <div className="form--control">
          <PhoneNumberInput
            label="Enter your phone number"
            placeholder="813 000 0000"
            id="phonenumber"
          />
        </div>
        <div className="forgot--password">
          <Text>Got referral code?</Text>
        </div>
        <div className="button--wrapper">
          <Button text="SIGN UP" />
        </div>

        <div className="newuser">
          <TextSecondary>Have an account?</TextSecondary>
          <LinkText to="/login"> Sign in to explore</LinkText>
        </div>

        <div className="privacy">
          <Text>Need help?</Text>
          <div className="privacy--terms">
            <p>Privacy</p>
            <p>Terms & Policy</p>
          </div>
        </div>
      </Form>
    </Layout>
  );
};

const Form = styled.form`
  background-color: #fff;
  border-radius: 0.7rem;
  padding: 5rem 5rem;
  margin-top: 3rem;
  @media (min-width: 768px) {
    margin: 2rem 5rem;
  }

  .first {
    margin-top: 4rem;
  }

  .form--control {
    margin-bottom: 1rem;
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

const Text = styled.p`
  color: #2e1963;
  font-weight: 500;
  font-size: 1.3rem;
`;

const LinkText = styled(Link)`
  text-decoration: none;
  color: #2e1963;
  font-weight: 500;
  font-size: 1.3rem;
`;

const TextSecondary = styled.p`
  font-weight: 500;
  font-size: 1.3rem;
`;

export default SignUp;
