import React, { useEffect, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import { InputEmail, InputPassword } from '../../components/Input';

import { Form, Text, LinkText, TextSecondary } from './styles';

const LOGIN = gql`
  mutation login($payload: LoginInput!) {
    login(data: $payload) {
      user {
        _id
        name
      }
      token
    }
  }
`;

const Login = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [login, { data, loading, error }] = useMutation(LOGIN);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    login({ variables: { payload: { ...values, input: values.email } } });
  };

  useEffect(() => {
    if (!error && data) {
      //route user
    }
  }, [data, error]);

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
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
