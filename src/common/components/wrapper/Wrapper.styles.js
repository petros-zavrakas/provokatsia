import styled from "styled-components";
import { Breakpoints } from "../../../assets/css/breakpoints";

export const Wrap = styled.div`
  max-width: 800px;
  padding: 0 45px;
  width: 100%;

  @media (${Breakpoints.mobile}) {
    padding: 0 30px;
  }
  @media (${Breakpoints.extraSmall}) {
    padding: 0 15px;
  }
`;
