import styled from 'styled-components';
import LoginImg from '../../assets/images/login-img.png';
import FormImg from '../../assets/images/formbg.png';
import ImageBG from '../../assets/images/imgbg.png';
import { IconBack, IconForward } from '../../assets/icons';
import { InputEmail, InputPassword } from '../../components/Input';

const Login = () => {
  return (
    <Container>
      <ImageSection>
        <div className="image--wrapper">
          <Image src={LoginImg} alt="house" />
          <div className="image-text">
            <HeadingPrimary>Trade Globally</HeadingPrimary>
            <TextPrimary>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              magnam vero voluptatem.
            </TextPrimary>

            <div className="image-text--scroll">
              <button className="forwardbtn">
                <IconForward />
              </button>

              <div className="image-text--scroll_btns">
                <div className="circlebtn active"></div>
                <div className="circlebtn"></div>
                <div className="circlebtn"></div>
              </div>
              <button className="forwardbtn">
                <IconBack className="icon" />
              </button>
            </div>
          </div>
        </div>
      </ImageSection>
      <FormSection>
        <div className="form--wrapper">
          <Form>
            <h2>Welcome Back</h2>
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
                placeholder="***********"
              />
            </div>
            <div className="forgot--password">
              <Text>Forgot password?</Text>
            </div>
            <div className="button--wrapper">
              <Button>SIGN IN</Button>
            </div>

            <div className="newuser">
              <p>New User?</p> <Text>Sign Up to get started</Text>
            </div>

            <div className="privacy">
              <Text>Need help?</Text>
              <div className="privacy--terms">
                <p>Privacy</p>
                <p>Terms & Policy</p>
              </div>
            </div>
          </Form>
        </div>
      </FormSection>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageSection = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0 2rem;
  order: 2;
  background-image: url(${FormImg});
  @media (min-width: 768px) {
    width: 55%;
    order: 1;
  }

  .image--wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .image-text {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 50%;
  }

  .image-text--scroll {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    &_btns {
      display: flex;
      gap: 1rem;
    }
  }

  .circlebtn {
    width: 7px;
    min-width: 12px;
    height: 12px;
    border-radius: 50%;
    opacity: 0.5;
    background-color: #b395ff;
  }

  .active {
    opacity: 1;
  }

  .forwardbtn {
    background-color: transparent;
    outline: none;
    border: none;
  }
`;

const FormSection = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0 2rem;
  background-image: url(${ImageBG});
  background-repeat: no-repeat;
  background-size: cover;
  order: 1;

  @media (min-width: 768px) {
    width: 45%;
    order: 2;
  }

  .form--wrapper {
    margin: 4rem auto;
  }
`;

const Image = styled.img`
  width: 50%;
`;

const HeadingPrimary = styled.h2`
  color: #fff;
`;

const TextPrimary = styled.p`
  color: #fff;
  font-size: 1.3rem;
`;

const Form = styled.form`
  background-color: #fff;
  border-radius: 0.7rem;
  padding: 8rem 5rem;
  margin: 0;
  @media (min-width: 768px) {
    margin: 0 5rem;
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

const Button = styled.button`
  width: 100%;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  border: none;
  color: #fff;
  outline: none;
  background: linear-gradient(94deg, #432b7b, #6a4bbc);
  font-size: 1.7rem;
  cursor: pointer;
`;

export default Login;
