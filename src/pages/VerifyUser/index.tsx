import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import Layout from '../../components/Layout/AuthPagesLayout';
import { InputNumber } from '../../components/Input';
import { AppContext } from '../../context';

import { Form } from './styles';

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
  const [iserror, setisError] = useState({});
  const [verify, { data, loading, error }] = useMutation(VERIFY, {
    onError: (err) => {
      setisError(err);
    },
  });

  const authUser = useContext(AppContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setCode(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (code.trim() === '') {
      return;
    }
    verify({ variables: { payload: { code: Number(code) } } });
  };

  useEffect(() => {
    if (!error && data) {
      authUser?.handleUserAuth(data.login);
      history.push('/dashboard');
    }

    if (error) {
      toast('An Error occorued. Try Again', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [authUser, history, data, error]);

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        {!iserror && <h2>Error occured</h2>}
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

export default VerifyUser;
