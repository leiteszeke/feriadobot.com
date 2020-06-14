// Dependencies
import styled, { createGlobalStyle } from '#theme';

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { font-family: 'Roboto', sans-serif; height: 100%; margin: 0; padding: 0; width: 100%; }
  body { font-family: 'Roboto', sans-serif; height: 100%; margin: 0; padding: 0; width: 100%; }

  #__next {
    font-family: 'Roboto', sans-serif;
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000000;
    color: white;
    padding: 8px;
    z-index: 100;
  }

  .skip-link:focus {
    top: 0;
  }
`;

export const Wrapper = styled.div`
  align-content: center;
  align-items: center;
  background: #f5f6fa;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
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

export const FlagList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  span {
    background-size: cover;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    font-size: 40px;
    margin: 8px;

    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
`;

export default GlobalStyle;
