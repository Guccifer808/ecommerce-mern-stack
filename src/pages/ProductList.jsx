import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from './../components/Products';
import Newsletter from './../components/Newsletter';
import Footer from './../components/Footer';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option`
  font-size: 14px;
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>T-Shirts</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Pink</Option>
            <Option>Yellow</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort</FilterText>
          <Select>
            <Option selected>Popular</Option>
            <Option>Newest</Option>
            <Option>Price: low to high</Option>
            <Option>Price: high to low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
