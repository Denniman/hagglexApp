import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import Button from '../../components/Button';
import Layout from '../../components/Layout/AuthPagesLayout';
import { InputEmail, InputPassword } from '../../components/Input';
import { AppContext } from '../../context';
import ErrorModal from '../../components/ErrorModal';

import { Form, Text, LinkText, TextSecondary } from './styles';

const LOGIN = gql`
  mutation login($payload: LoginInput!) {
    login(data: $payload) {
      user {
        _id
        email
        username
        emailVerified
      }
      token
    }
  }
`;

const Login = () => {
  const [values, setValues] = useState({ email: '', password: '' });

  const authuser = useContext(AppContext);

  const [isError, setisError] = useState({});

  const history = useHistory();

  const [login, { data, loading, error }] = useMutation(LOGIN, {
    onError: (err) => {
      setisError(err);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (values.password.trim() === '' || values.email.trim() === '') {
      return;
    }

    login({
      variables: {
        payload: { password: values.password, input: values.email },
      },
    });
  };

  useEffect(() => {
    if (!error && data) {
      authuser?.userLogin(data.login);
      history.push('/dashboard');
    }
  }, [authuser, history, data, error, isError]);

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        {error?.graphQLErrors.map(({ message }, i) => (
          <ErrorModal key={i} text={message} />
        ))}
        <h2>Welcome Back</h2>
        <div className="form--control first">
          <InputEmail
            id="email"
            label="Email Address"
            name="email"
            placeholder="example@mail.com"
            onChange={handleChange}
          />
        </div>
        <div className="form--control">
          <InputPassword
            id="password"
            label="Password"
            name="password"
            placeholder="*****************"
            onChange={handleChange}
          />
        </div>
        <div className="forgot--password">
          <Text>Forgot password?</Text>
        </div>
        <div className="button--wrapper">
          <Button text={loading ? 'Loading...' : 'SIGN IN'} />
        </div>

        <div className="newuser">
          <LinkText to="/register">
            <TextSecondary>New User?</TextSecondary>
            Sign Up to get started
          </LinkText>
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

export default Login;
