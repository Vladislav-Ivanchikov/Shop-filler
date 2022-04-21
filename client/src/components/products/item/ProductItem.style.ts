import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 386px;
  height: 444px;
  padding: 16px;
  margin: 0 40px 100px 0;
  
  &:nth-child(3n+3) {
    margin: 0;
  }
`
export const ProdName = styled.span`
  margin-top: 24px;
`
export const ProdPrice = styled.span`
  margin-bottom: 16px;
`