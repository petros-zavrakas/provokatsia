import styled from "styled-components";
import { Colors } from "../../assets/css/colors";

export const Title = styled.h3`
  text-transform: uppercase;
  span:nth-child(2n + 1) {
    color: ${Colors.secondary};
  }
`;
