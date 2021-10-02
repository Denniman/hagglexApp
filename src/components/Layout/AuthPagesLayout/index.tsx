import { ReactNode } from 'react';
// import LoginImg from '../../assets/images/login-img.png';
import LoginImg from '../../../assets/images/login-img.png';
import { IconBack, IconForward } from '../../../assets/icons';
import {
  Container,
  ImageSection,
  TextPrimary,
  HeadingPrimary,
  Image,
  FormSection,
} from './styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
      <FormSection>{children}</FormSection>
    </Container>
  );
};

export default Layout;
