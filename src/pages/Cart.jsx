import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';
import Footer from './../components/Footer';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopInfo = styled.div``;
const TopText = styled.span`
  margin: 0 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductInfo = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  margin: 50px 0px;
  ${'' /* padding was none */}
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetails = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  ${'' /* margin-bottom was 20px */}
`;
const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
  font-weight: 500;
`;
const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 400;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopInfo>
            <TopText>SHOPPING BAG(5)</TopText>
            <TopText>WISHLIST (2)</TopText>
          </TopInfo>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <ProductInfo>
            <Product>
              <ProductDetails>
                <Image src='https://freepngimg.com/download/shoes/27428-5-nike-shoes-transparent-background.png' />
                <Details>
                  <ProductName>
                    <b>Product: </b>RUNNING SNEAKERS
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>123321808
                  </ProductId>
                  <ProductColor color='blue' />
                  <ProductSize>
                    <b>Size: </b>M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 75</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src='https://freepngimg.com/download/shoes/27428-5-nike-shoes-transparent-background.png' />
                <Details>
                  <ProductName>
                    <b>Product: </b>RUNNING SNEAKERS
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>123321808
                  </ProductId>
                  <ProductColor color='blue' />
                  <ProductSize>
                    <b>Size: </b>M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 75</ProductPrice>
              </PriceDetails>
            </Product>
          </ProductInfo>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 150</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discoung</SummaryItemText>
              <SummaryItemPrice>$ -5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 150</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
