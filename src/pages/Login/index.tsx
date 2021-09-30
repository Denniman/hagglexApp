import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { InputEmail, InputPassword } from '../../components/Input';
import Button from '../../components/Button';
import Layout from '../../components/Layout';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues((values: any) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const userData = {
      email: values.email,
      password: values.password,
    };

    console.log(userData);
  };

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
          <Button text="SIGN IN" />
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

const Form = styled.form`
  background-color: #fff;
  border-radius: 0.7rem;
  padding: 8rem 5rem;
  margin: 0;
  @media (min-width: 768px) {
    margin: 5rem;
  }

  .first {
    margin-top: 4rem;
  }

  .form--control {
    margin-bottom: 1.8rem;
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

const TextSecondary = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
  color: #000;
  margin-right: 0.6rem;
`;

export default Login;
