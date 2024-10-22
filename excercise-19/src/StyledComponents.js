import styled from "styled-components";

// ProductContainer styled component
export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

// ProductName styled component
export const ProductName = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

// ProductPrice styled component
export const ProductPrice = styled.div`
  color: red;

  &:hover {
    color: green; // Change the text color to green on hover
  }
`;
