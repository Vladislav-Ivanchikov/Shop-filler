import styled from "styled-components";

export const NavBar = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  height: 80px;
`;

export const CategoryBlock = styled.div`
  width: 354px;
  display: flex;
  justify-content: space-around;
`

export const CategoryItem = styled.div`
  cursor: pointer;
`

type CurrencyMenuProp = {
    open: boolean
};

export const CurrencyMenu = styled.div`
  display: ${(props: CurrencyMenuProp) => props.open ? "flex" : "none"};
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  position: absolute;
  width: 114px;
  height: 214px;
  left: 1248px;
  top: 65px;
  padding: 0 20px;
  background: white;
  -webkit-box-shadow: 5px 5px 15px -9px #000000;
  box-shadow: 5px 5px 15px -9px #000000;
`
export const CurrencyItem = styled.div`
  width: 76px;
  height: 29px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  text-align: left;
  color: #1D1F22;
  cursor: pointer;
`

export const CurrencyBlock = styled.div`
  display: flex;
  margin-right: 10px;
`

export const CurrencyOpener = styled.div`
  width: 5px;
  height: 5px;
  margin: 10px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  transform: rotate(45deg);
  cursor: pointer;
`

export const Toolbar = styled.div`
  display: flex;
  justify-content: center;
  width: 354px;
`



