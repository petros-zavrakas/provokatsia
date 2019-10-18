import styled from "styled-components";
import { Colors } from "../../assets/css/colors";

export const MemberCont = styled.li`
  display: flex;
  margin-bottom: 55px;
`;

export const Photo = styled.div`
  border: 6px solid rgba(255, 255, 255, 0.2);
  border-radius: 100%;
  height: 90px;
  overflow: hidden;
  width: 90px;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding: 0 0 0 20px;

  h3 {
    color: ${Colors.secondary};
    line-height: 1;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.8;
  }

  span {
    color: ${Colors.secondary};
    display: inline-block;
    font-size: 0.75rem;
    margin-right: 10px;

    span {
      color: #fff;
    }
  }
`;
