import styled from "styled-components";
import { Breakpoints } from "../../assets/css/breakpoints";
import item1BG from "../../assets/images/menuItem1.svg";
import item2BG from "../../assets/images/menuItem2.svg";

export const Nav = styled.nav`
  margin-top: -20px;
  ul {
    li a {
      color: #fff;
      display: block;
      font-size: 1.2rem;
      font-weight: bold;
      padding: 7px 34px 10px 15px;
      transition: all 0.2 easy-in-out;
    }
    li.item1 a {
      background: url(${item1BG}) no-repeat;
      transform: rotate(-8deg);

      &:hover {
        transform: rotate(-5deg);
      }
    }
    li.item2 a {
      background: url(${item2BG}) no-repeat;
      transform: rotate(5deg);

      &:hover {
        transform: rotate(8deg);
      }
    }
  }
`;
