import styled from "styled-components";
import { Colors } from "../../assets/css/colors";

export const EventCont = styled.div`
  margin: 20px 0;
  display: flex;
  position: relative;
`;

export const EventDate = styled.div`
  text-align: center;
  min-width: 90px;
  span {
    background-color: rgba(255, 255, 255, 0.3);
    display: inline-block;
    font-size: 0.875rem;
    text-transform: uppercase;
    width: 50%;
  }
  span.day {
    color: ${Colors.secondary};
    display: block;
    font-size: 4rem;
    font-weight: bold;
    line-height: 0.8;
    padding: 10px 5px;
    width: auto;
  }
  span.year {
    color: ${Colors.secondary};
  }
`;

export const EventInfo = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  flex: 1;
  margin-left: 5px;
  padding-left: 20px;

  h3 {
    margin-top: 10px;
  }
  h4,
  h4 a {
    color: ${Colors.secondary};
    font-size: 0.875rem;
    font-weight: 400;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${Colors.secondaryHover};
    }
  }
  span {
    display: block;
    font-size: 0.6875rem;
    line-height: 1;
  }
`;

export const EventActions = styled.div`
  position: absolute;
  right: 20px;
  top: 30px;

  a {
    align-items: center;
    background-color: ${Colors.main};
    border-radius: 100%;
    display: flex;
    height: 35px;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    width: 35px;

    &:hover {
      background-color: ${Colors.secondary};
    }
  }
`;
