import { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import Layout from '../../components/Layout';
import {
  InputEmail,
  InputPassword,
  InputText,
  PhoneNumberInput,
} from '../../components/Input';
import Button from '../../components/Button';

const REGISTER = gql`
  mutation register($payload: CreateUserInput!) {
    register(data: $payload) {
      user {
        _id
        email
        username
        phonenumber
      }
      token
    }
  }
`;

const Register = () => {
  const [register, { data, loading, error }] = useMutation(REGISTER);

  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: '',
    phonenumber: '',
    username: '',
    country: 'NG',
    currency: 'Naira',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    register({ variables: { payload: { ...values } } });
  };

  useEffect(() => {
    if (!error && data) {
      console.log(data);
      history.push('/verify-user');
    } else {
      console.log('error occured', error);
    }
  }, [history, data, error]);

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <h2>Create new account</h2>
        <div className="form--control first">
          <InputEmail
            id="email"
            label="Email Address"
            placeholder="example@mail.com"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form--control">
          <InputPassword
            id="password"
            label="Password"
            placeholder="*****************"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form--control">
          <InputText
            placeholder="Chrissteve"
            label="Create username"
            id="username"
            name="username"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form--control">
          <PhoneNumberInput
            label="Enter your phone number"
            placeholder="813 000 0000"
            id="phonenumber"
            name="phonenumber"
            onChange={handleChange}
            required
          />
        </div>
        <div className="forgot--password">
          <Text>Got referral code?</Text>
        </div>
        <div className="button--wrapper">
          <Button text={loading ? 'Loading...' : 'SIGN UP'} />
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

export default Register;
