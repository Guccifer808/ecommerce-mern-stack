import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Badge } from '@mui/material';

//Styled Components
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//Left side of the container
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Languages = styled.span`
  font-size: 14;
  cursor: pointer;s
`;
const Search = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
//Middle side of the container
const Middle = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
`;
//Right side of the container
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: <p></p>;
  margin-left: 25px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Languages>EN</Languages>
          <Search>
            <Input /> <SearchIcon style={{ color: 'gray', fontSize: 18 }} />
          </Search>
        </Left>
        <Middle>
          <Logo>SHOPUA</Logo>
        </Middle>
        <Right>
          <MenuItem>REG</MenuItem>
          <MenuItem>S in</MenuItem>
          <MenuItem>
            <Badge color='info' variant='dot'>
              <ShoppingBasketOutlinedIcon color='action' />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
