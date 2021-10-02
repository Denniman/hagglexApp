import styled from 'styled-components';
import FormImg from '../../../assets/images/formbg.png';
import ImageBG from '../../../assets/images/imgbg.png';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageSection = styled.section`
  width: 100%;
  height: 110vh;
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

export const FormSection = styled.section`
  width: 100%;
  height: 110vh;
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

export const Image = styled.img`
  width: 50%;
`;

export const HeadingPrimary = styled.h2`
  color: #fff;
`;

export const TextPrimary = styled.p`
  color: #fff;
  font-size: 1.3rem;
`;
