import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 85vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 400;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 400;
  font-size: 32px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  ${'' /* width: 40%; /// WAS 50% */}
  margin: 30px 0px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option`
  font-size: 14px;
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src='https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw299852d6/original/90_1008608-1A05765_1D520_20_BaroccoSilhouetteDenimShirt-Shirts-versace-online-store_0_1.jpg?sw=1440&sh=2000&sm=fit&sfrm=jpg' />
        </ImgContainer>
        <InfoContainer>
          <Title>LETTERMAN JACKET</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            minima, omnis nobis hic aperiam enim sunt! Nesciunt nobis
            voluptatibus cupiditate voluptatum, soluta quos perferendis
            deserunt.
          </Description>
          <Price>$ 1,200</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color </FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='blue' />
              <FilterColor color='gray' />
              <FilterColor color='red' />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
