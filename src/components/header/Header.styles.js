import styled from "styled-components";
import { Breakpoints } from "../../assets/css/breakpoints";
import teamTitleBG from "../../assets/images/provokatsiaBox.svg";

export const HeaderContainer = styled.header`
  display: flex;
  height: 100vh;
  position: relative;
  width: 350px;
`;

export const Menu = styled.div`
  bottom: 0;
  position: fixed;

  div,
  nav {
    display: inline-block;
    vertical-align: top;
  }
`;

export const Logo = styled.div`
  height: 250px;

  img {
    height: 100%;
  }
`;

export const HeaderImage = styled.div`
  left: 0;
  position: fixed;
  top: 0;
  z-index: -1;

  img {
    width: 700px;
  }
`;

export const TeamTitle = styled.h2`
  background: url(${teamTitleBG}) no-repeat;
  color: #fff;
  font-size: 1.45rem;
  padding: 15px 20px 20px 20px;
  transform: rotate(-12deg);

  span {
    color: #7cb15f;
    font-size: 1rem;
    text-transform: uppercase;
  }
`;
