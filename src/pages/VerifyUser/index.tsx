import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { gql, useMutation } from '@apollo/client';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import { InputNumber } from '../../components/Input';

const VERIFY = gql`
  mutation verifyUser($payload: VerifyUserInput!) {
    verifyUser(data: $payload) {
      user {
        _id
        email
        username
      }
      token
    }
  }
`;

const VerifyUser = () => {
  const history = useHistory();
  const [code, setCode] = useState('');
  const [verify, { data, loading, error }] = useMutation(VERIFY);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setCode(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    verify({ variables: { payload: { code: Number(code) } } });
  };

  useEffect(() => {
    if (!error && data) {
      console.log(data);
      history.push('/dashboard');
    } else {
      console.log('error occured', error);
    }
  }, [history, data, error]);

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <h2>Please verify your account</h2>
        <p>Supply the code sent to your email address</p>

        <div className="form--control">
          <InputNumber
            placeholder="Enter code"
            id="otp"
            name="code"
            onChange={handleChange}
          />
        </div>
        <Button
          text={loading ? 'Loading...' : 'Verify Email'}
          className="btn"
        />
      </Form>
    </Layout>
  );
};

const Form = styled.form`
  padding: 2rem;
  margin: 10rem auto;
  h2,
  p {
    color: #fff;
    text-align: center;
    font-size: 1.4rem;
  }

  .form--control {
    margin: 3rem 0;
  }

  .btn {
    padding: 1.7rem;
  }
`;

export default VerifyUser;
