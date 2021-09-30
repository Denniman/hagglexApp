import styled from 'styled-components';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import { InputTextDashboard } from '../../components/Input';

const VerifyUser = () => {
  return (
    <Layout>
      <Form>
        <h2>Please verify your email</h2>
        <div className="form--control">
          <InputTextDashboard placeholder="Enter token" id="otp" />
        </div>
        <Button text="Verify Email" className="btn" />
      </Form>
    </Layout>
  );
};

const Form = styled.form`
  padding: 2rem;
  margin: 10rem auto;
  h2 {
    color: #fff;
    text-align: center;
  }

  .form--control {
    margin: 3rem 0;
  }

  .btn {
    padding: 1.7rem;
  }
`;

export default VerifyUser;
