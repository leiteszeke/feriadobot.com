// Dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
  align-content: center;
  align-items: center;
  background: #f5f6fa;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100%;
  padding: 20px;
  width: 100%;

  &.withHeader {
    display: grid;
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 10px;
    grid-template-columns: repeat(3, 250px);
    justify-content: space-between;
    padding-top: 70px;
  }
`;

export const Image = styled.img`
  animation-duration: 3s;
  animation-name: moveRobot;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  height: 200px;

  @keyframes moveRobot {
    0% {
      transform: translateX(0px);
    }

    25% {
      transform: translateX(60px);
    }

    50% {
      transform: translateX(0px);
    }

    75% {
      transform: translateX(-60px);
    }

    100% {
      transform: translateX(0px);
    }
  }
`;

export const Loader = styled.h2`
  color: #2873b4;
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  text-align: center;
  width: 100%;
`;

export const Header = styled.header`
  align-items: center;
  background: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  display: flex;
  height: 50px;
  left: 0;
  padding: 0 12px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  svg {
    cursor: pointer;
  }
`;

export const FlagList = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  span {
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    font-size: 40px;
    margin: 0 4px;

    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
`;
