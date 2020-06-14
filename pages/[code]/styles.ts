import styled from 'styled-components';

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
