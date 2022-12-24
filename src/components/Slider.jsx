import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import img from '../assets/Hero1.png';

//Styled Components
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;
const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  color: white;
  background-color: #0000008a;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  &:hover,
  &:focus {
    opacity: 0.75;
    color: white;
    background-color: #0000008a;
  }
  cursor: pointer;
`;
const Wrapper = styled.div`
  height: 100%;
`;
const Slides = styled.div`
  display: flex;
  align-items: center;
  width: 98vw;
  ${'' /* was 100vw on desktop dev */}
  height: 100vh;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Img = styled.img`
  height: 80%;
  padding-left: 25px;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 72px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spaacing: 2px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    border: 2px solid #0288d1;
  }
`;
const Slider = () => {
  return (
    <Container>
      <Arrow direction='left'>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slides>
          <ImgContainer>
            <Img src={img} />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Description>
              GET STYLISH WITH US! 30% OFF FOR NEW ARRIVALS
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slides>
      </Wrapper>
      <Arrow direction='right'>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
