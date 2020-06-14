import styled from 'styled-components';

export const Wrapper = styled.div`
  align-content: center;
  align-items: center;
  background: #f5f6fa;
  box-sizing: border-box;
  cursor: pointer;
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;
  grid-template-columns: repeat(3, 250px);
  justify-content: space-between;
  min-height: 100%;
  padding: 0 20px;
  padding-top: 70px;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 250px);
  }

  @media (max-width: 500px) {
    justify-content: center;
    grid-template-columns: repeat(1, 250px);
  }
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

export default Wrapper;
