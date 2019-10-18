import { Breakpoints } from "./assets/css/breakpoints";
import styled, { createGlobalStyle } from "styled-components";
import bgImage from "./assets/images/bg.png";

// Global Styles
export const GlobalStyles = createGlobalStyle`
  body{
    background-color: #7cb15f;
    background-image: url(${bgImage});
    background-repeat: repeat;
    color: #fff;
    font-family: "Poppins", Sans-serif;
    font-weight: 300;
    position: relative;
  }

  a{ text-decoration: none; }

  h1, h2, h3, h4{
    margin: 0;
  }
  
  ul{
    margin: 0;
    padding: 0;
    li{ list-style: none; }
  }

  hr{ 
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    margin: 30px 0;
   }
`;

export const Main = styled.main`
  display: flex;
  padding: 50px 0;
  @media (${Breakpoints.small}) {
    padding: 25px 0;
  }

  & > div {
    flex: 1;
  }
`;
