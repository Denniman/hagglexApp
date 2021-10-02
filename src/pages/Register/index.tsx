import { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout/AuthPagesLayout';
import {
  InputEmail,
  InputPassword,
  InputText,
  PhoneNumberInput,
} from '../../components/Input';
import Button from '../../components/Button';
import { Form, LinkText, Text, TextSecondary } from './styles';

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
  const [isError, setisError] = useState({});

  const [register, { data, loading, error }] = useMutation(REGISTER, {
    onError: (err) => {
      setisError(err);
    },
  });

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
      history.push('/verify-user');
    }
  }, [history, data, error]);

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <h2>{!isError && <h2>Error occured</h2>}</h2>
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

export default Register;
