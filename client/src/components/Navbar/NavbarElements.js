import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({scrollNav})=>(scrollNav?'#000':'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavHead = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width:960px){
    margin-left:5px;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

`;

export const NavBtnLink = styled(Link)`
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 18px;
  outline: none;
  border: none;
  text-transform:uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    font-size:19px;
  }
`;
