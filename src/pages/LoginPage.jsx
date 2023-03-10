import styled from 'styled-components';
import { mobile } from './../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url('https://images.pexels.com/photos/5120192/pexels-photo-5120192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')
      center;
  background-size: cover;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 20%;
  background-color: white;
  ${mobile({ width: '75%' })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  background-color: #0288d1;
  border: none;
  color: white;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Link = styled.a`
  font-size: 12px;
  margin: 5px 0;
  text-decoration: underline;
  cursor: pointer;
`;
const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='Username' />
          <Input placeholder='Password' />
          <Button>LOGIN</Button>
          <Link>FORGOT PASSWORD</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
